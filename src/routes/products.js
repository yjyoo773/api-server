'use strict'

const express = require('express')
const GenericCollection = require('../models/data-collection-class')
const productModel = require('../models/store-product.js')
const productRouter = express.Router()

const product =  new GenericCollection(productModel)

productRouter.get('/product',getAll)
productRouter.get('/product/:id',getOne)
productRouter.post('/product',createItem)
productRouter.put('/product/:id',updateItem)
productRouter.delete('/product/:id',deleteItem)

async function getAll(req,res){
    let items = await product.read()
    res.status(200).json(items)
}

async function getOne(req,res){
    let id = req.params.id
    let item = await product.read(id)
    res.status(200).json(item)
}

async function createItem(req,res){
    let data = req.body
    let createItem = await product.create(data)
    res.status(201).json(createItem)
}

async function updateItem(req,res){
    let id = req.params.id
    let data =req.body
    let updateItem = await product.update(id,data)
    res.status(200).json(updateItem)
}

async function deleteItem(req,res){
    let id = req.params.id
    await product.delete(id)
    res.status(200).json({msg:'deleted!'})
}

module.exports = productRouter