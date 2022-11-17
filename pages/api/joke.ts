// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getJoke from "../../functions/getJoke";
type Data = {
  joke: string
}
console.log()
export default function handler(
  
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ joke: getJoke() })
}
