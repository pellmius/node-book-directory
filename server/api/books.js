const mongoose = require('mongoose')
const express = require('express');
const Book = require('../models/book');
const router = express.Router();


router.post('/create', async (req,res) => {
    
    let title= req.body.title || "Unavailable",
    author = req.body.author || "Unavailable",
    synopsis = req.body.synopsis || "Unavailable",
    pdfLink = req.body.pdfLink || "Unavailable",
    price= req.body.price || "Unavailable";

    let newBook = new Book({title,author,synopsis,pdfLink,price})
    newBook.save();
})

router.get('/search/:title', async (req,res) => {
    try {
        let titleForSearching = req.params.title
        let regExpTitle = new RegExp(titleForSearching,'i')
        let books = await Book.find({title: regExpTitle})
        res.json({books:books});
    } catch {
        throw new Error("ERRR")
    }
})

router.get('/searchById/:id', async (req,res) => {
    try {
        let bookById = await Book.findById(req.params.id);
        res.json({book:bookById});
    } catch {
        res.json({msg:"Not found any book with such title."})
    }
})


module.exports = router