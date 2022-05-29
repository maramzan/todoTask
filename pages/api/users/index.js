import dbConnect from '../../../utils/dbConnect';
import UserModel from '../../../models/UserSchema';
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import bcrypt from 'bcryptjs';





dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await UserModel.find();

        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;

    case "POST":
      try {
        let NewUser = new UserModel();
        let euser = await UserModel.findOne({ email: req.body.email });

        if (euser) {
          res.status(400).json({ success: false,message:'Email already exists'});
        } else {
          NewUser.username = req.body.username;
          NewUser.email = req.body.email;
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(req.body.password, salt);
          NewUser.password =hash ;

          let dbuser = await NewUser.save();
          delete dbuser.password;

          res.status(201).json(dbuser);
        }
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const user = await UserModel.findOne({
          email: req.body.email,
        });

        console.log("user hash",user);
        
        const isCorrectPass = bcrypt.compareSync(req.body.password, user.password);
        
        
        if (user && isCorrectPass) {
          const secretKey = "ABCD";
          const token = sign(
            {
              exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 30),
              id: user._id,
            },
            secretKey
          );

          const serialized = serialize("JWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "strict",
            path: "/",
          });

          res.setHeader("Set-Cookie", serialized);
          res.status(200).json({ data: "success" });
        } else {
          res.status(401).json({ success: false , message:'Incorrect credentials' });
        }
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;

    default:
      res.status(500).json({ success: false });
      break;
  }
};
