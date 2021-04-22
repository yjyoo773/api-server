'use strict'

const express = require('express')
const GenericCollection = require('../models/data-collection-class')
const clothesModel = require('../models/clothes')
const clothesRouter = express.Router()

const clothes =  new GenericCollection(clothesModel)


clothesRouter.get('/food',getAll)
clothesRouter.get('/food/:id',getOne)
clothesRouter.post('/food',createItem)
clothesRouter.put('/food/:id',updateItem)
clothesRouter.delete('/food/:id',deleteItem)

async function getAll(req,res){
    let items = await clothes.read()
    res.status(200).json(items)
}

async function getOne(req,res){
    let id = req.params.id
    let item = await clothes.read(id)
    res.status(200).json(item)
}

async function createItem(req,res){
    let data = req.body
    let createItem = await clothes.create(data)
    res.status(201).json(createItem)
}

async function updateItem(req,res){
    let id = req.params.id
    let data =req.body
    let updateItem = await clothes.update(id,data)
    res.status(200).json(updateItem)
}

async function deleteItem(req,res){
    let id = req.params.id
    await clothes.delete(id)
    res.status(200).json({msg:'deleted!'})
}

module.exports = clothesRouter