import express from "express";
import { createData } from "../Controller/TableController.js";
import { body } from "express-validator";

const router = express.Router();

const validateInput = [
    body('name').notEmpty().withMessage('Name cannot be empty'),
    body('nomorhp').isMobilePhone().withMessage('Nomor HP harus berupa nomor telepon'),
    body('email').isEmail().withMessage('Email harus berupa alamat email yang valid'),
    body('pesan').notEmpty().withMessage('Pesan cannot be empty'),
  ];
  
router.post("/message", validateInput, createData);
export default router;