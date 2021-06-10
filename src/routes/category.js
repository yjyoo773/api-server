'use strict'

const express = require('express')
const GenericCollection = require('../models/data-collection-class')
const categoryModel = require('../models/store-category')
const categoryRouter = express.Router()

const category =  new GenericCollection(categoryModel)


categoryRouter.get('/category',getAll)
categoryRouter.get('/category/:id',getOne)
categoryRouter.post('/category',createItem)
categoryRouter.put('/category/:id',updateItem)
categoryRouter.delete('/category/:id',deleteItem)

async function getAll(req,res){
    let items = await category.read()
    res.status(200).json(items)
}

async function getOne(req,res){
    let id = req.params.id
    let item = await category.read(id)
    res.status(200).json(item)
}

async function createItem(req,res){
    let data = req.body
    let createItem = await category.create(data)
    res.status(201).json(createItem)
}

async function updateItem(req,res){
    let id = req.params.id
    let data =req.body
    let updateItem = await category.update(id,data)
    res.status(200).json(updateItem)
}

async function deleteItem(req,res){
    let id = req.params.id
    await category.delete(id)
    res.status(200).json({msg:'deleted!'})
}

module.exports = categoryRouter