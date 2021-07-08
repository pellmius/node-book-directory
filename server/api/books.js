const mongoose = require('mongoose')
const express = require('express');
const Book = require('../models/book');
const router = express.Router();


router.post('/create', async (req,res) => {
    
    let title= req.body.title || "Unavailable",
    author = req.body.author || "Unavailable",
    synopsis = req.body.synopsis || "Unavailable",
    pdfLink = req.body.pdfLink || "Unavailable",
    cover = req.body.cover || "Unavailable"
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
        res.json({msg:"Not found."})
    }
})

router.get('/search_by_id/:id', async (req,res) => {
    try {
        let bookById = await Book.findById(req.params.id);
        res.json({book:bookById});
    } catch {
        res.json({msg:"Invalid Parameter"})
    }
})

router.get('/get_random_books/:numberOfBooks', async (req,res) => {
    try {
        let booksArray = [];
        let timesToIterate = req.params.numberOfBooks;
        for(let i = 0; i < timesToIterate; i++) {
            let book = await Book.findOne({});
            booksArray.push(book);
        }
        
    } catch {
        res.json({msg:"Invalid Parameter"})
    }
})

module.exports = router