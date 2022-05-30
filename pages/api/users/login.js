
import bcryptjs from "bcryptjs";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import UserModel from '../../../models/UserSchema';
import dbConnect from "../../../utils/dbConnect";
  

dbConnect();


export default async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
    });

    console.log("user hash", user);
    delete user?.password;

    const isCorrectPass = bcryptjs.compareSync(req.body.password, user.password);

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
      res.status(401).json({ success: false, message: "Incorrect credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
