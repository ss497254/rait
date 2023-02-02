import Authors from "../../hooks/authors.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") res.json({ message: "some errors occured" });

    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const data = JSON.parse(req.body);

        const author = Authors.find(
            (author) =>
                author.paperId == data.paperId && author.mobile == data.password
        );

        if (author) {
            const result = { ...author, mobile: undefined };

            return res.json(result);
        }
        res.json({ message: "invalid credentials" });
    } catch {
        res.json({ message: "some errors occured" });
    }
}
