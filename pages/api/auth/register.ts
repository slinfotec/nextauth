
import { pool } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { hash   } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  const exists = await pool.query("select * from User where email='" + email + "' LIMIT 1");
  if (exists.length > 0) {
    res.status(400).send("User already exists");
  } else {   
    const user = await pool.query("insert into User(email,password) values('" + email + "',sha1('" + password + "'))");
    res.status(200).json(user);
  }
}
