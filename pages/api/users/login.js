
import {verify} from "jsonwebtoken";

export default async (req, res) => {
  const { cookies } = req;

  const jwt = cookies.JWT;

  const secretKey = "ABCD";


  if (!jwt) {
    return res.json({ data: "Invalid Token" });
  } else {
    const user = verify(jwt, secretKey);

    console.log("user",user);

    res.json({ data: "JWT Success", id: user?.id });
  }
};
