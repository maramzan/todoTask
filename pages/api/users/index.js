import dbConnect from "../../../utils/dbConnect";
import UserModel from "../../../models/UserSchema";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { verify } from "jsonwebtoken";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "PUT":
      try {
        // const username = req.body.username;
        // const userEmail = req.body.email;
        // UserModel.updateOne(userEmail)
        const { cookies } = req;
        const { username } = req.body;

        const jwt = cookies.JWT;

        const secretKey = "ABCD";

        const payload = verify(jwt, secretKey);

        const userId = payload.id;

        await UserModel.updateOne({ _id: userId }, { username });

        res.status(200).json({ message: "updated successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: "something went wrong while updating username" });
      }
      break;
    case "GET":
      try {
        const { cookies } = req;

        const jwt = cookies.JWT;

        const secretKey = "ABCD";

        if (!jwt) {
          return res.json({ data: "Invalid Token" });
        } else {
          const payload = verify(jwt, secretKey);

          console.log("payload", payload);
          const user = await UserModel.findOne(
            {
              _id: payload?.id,
            },
            { password: 0 }
          );

          res.json({ data: "JWT Success", user: user });
        }
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;

    case "POST":
      try {
        let NewUser = new UserModel();
        let euser = await UserModel.findOne({ email: req.body.email });

        if (euser) {
          res.status(400).json({ success: false, message: "Email already exists" });
        } else {
          NewUser.username = req.body.username;
          NewUser.email = req.body.email;
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(req.body.password, salt);
          NewUser.password = hash;

          let user = await NewUser.save();
          delete user.password;

          res.status(201).json({ user, message: "user created successfully" });
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
