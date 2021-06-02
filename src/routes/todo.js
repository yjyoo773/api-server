'use strict'

const express = require('express')
const GenericCollection = require('../models/data-collection-class')
const todoModel = require('../models/todo')
const todoRouter = express.Router()

const todo =  new GenericCollection(todoModel)


todoRouter.get('/todo',getAll)
todoRouter.get('/todo/:id',getOne)
todoRouter.post('/todo',createItem)
todoRouter.put('/todo/:id',updateItem)
todoRouter.delete('/todo/:id',deleteItem)

async function getAll(req,res){
    let items = await todo.read()
    res.status(200).json(items)
}

async function getOne(req,res){
    let id = req.params.id
    let item = await todo.read(id)
    res.status(200).json(item)
}

async function createItem(req,res){
    let data = req.body
    let createItem = await todo.create(data)
    res.status(201).json(createItem)
}

async function updateItem(req,res){
    let id = req.params.id
    let data =req.body
    let updateItem = await todo.update(id,data)
    res.status(200).json(updateItem)
}

async function deleteItem(req,res){
    let id = req.params.id
    await todo.delete(id)
    res.status(200).json({msg:'deleted!'})
}

module.exports = todoRouter