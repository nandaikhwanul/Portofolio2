import Table from "../Models/TableDb.js";
import { validationResult } from "express-validator";

export const createData = async (req, res) => {
    const { name, nomorhp, email, pesan } = req.body;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
          }

          
        const newData = new Table({
            name,
            nomorhp,
            email,
            pesan,
        });

        const savedData = await newData.save();

        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({message: "Pesan Sepertinya tidak tersimpan"});
    }
}