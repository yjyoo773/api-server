'use strict'

const express = require('express')
const GenericCollection = require('../models/data-collection-class')
const foodModel = require('../models/food')
const foodRouter = express.Router()

const food =  new GenericCollection(foodModel)

foodRouter.get('/food',getAll)
foodRouter.get('/food/:id',getOne)
foodRouter.post('/food',createItem)
foodRouter.put('/food/:id',updateItem)
foodRouter.delete('/food/:id',deleteItem)

async function getAll(req,res){
    let items = await food.read()
    res.status(200).json(items)
}

async function getOne(req,res){
    let id = req.params.id
    let item = await food.read(id)
    res.status(200).json(item)
}

async function createItem(req,res){
    let data = req.body
    let createItem = await food.create(data)
    res.status(201).json(createItem)
}

async function updateItem(req,res){
    let id = req.params.id
    let data =req.body
    let updateItem = await food.update(id,data)
    res.status(200).json(updateItem)
}

async function deleteItem(req,res){
    let id = req.params.id
    await food.delete(id)
    res.status(200).json({msg:'deleted!'})
}

module.exports = foodRouter