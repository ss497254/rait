import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.redirect("https://people.iitism.ac.in/~rait");
}
