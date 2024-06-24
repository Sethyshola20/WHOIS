import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === "POST") {
        const { prenom, email, site }:{prenom:string,email:string,site:string} = req.body;
        // script`
        console.log(`Prénom: ${prenom}, Email: ${email}, Site: ${site}`);
        return res.status(200).json({ message: "Message sent successfully" });
    } else {
       return res.status(405).json({ message: "Method not allowed" });
    }
}