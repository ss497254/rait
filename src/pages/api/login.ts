import Authors from "authors.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") res.json({ message: "some errors occured" });

    try {
        const data = JSON.parse(req.body);

        const author = Authors.find(
            (author) =>
                author.paperId == data.paperId && author.mobile == data.password
        );

        if (author) {
            //@ts-ignore
            delete author.mobile;

            return res.json(author);
        }
        res.json({ message: "invalid credentials" });
    } catch {
        res.json({ message: "some errors occured" });
    }
}
