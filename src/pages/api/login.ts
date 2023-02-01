import type { NextApiRequest, NextApiResponse } from "next";
import { getItem } from "../../lib/firebase";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST")
        return res.json({ message: "some error occured" });

    try {
        const data = JSON.parse(req.body);

        const result = (await getItem(data.email))[0].doc;

        console.log(result["Mobile Number of the Author"], data.password);

        if (
            result["Mobile Number of the Author"].toString() ===
            data.password.trim()
        ) {
            delete result["Mobile Number of the Author"];

            return res.json({ result });
        }

        res.json({ message: "invalid credentials" });
    } catch {
        res.json({ message: "some errors occured" });
    }
}
