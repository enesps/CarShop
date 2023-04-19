/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.Cookie;

  if (!jwt) {
    return res.json({ message: "You are already not logged in..." });
  } else {
    const serialized = serialize("Cookie", null ,{
        httpOnly: true,
        sameSite: "strict",
        maxAge: -1 ,
        path: "/"
    })

    res.setHeader("Set-Cookie", serialized);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}