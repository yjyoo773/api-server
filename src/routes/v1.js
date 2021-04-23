'use strict'

const express = require('express')


var wrapper = (req,res)=>{

    // const GenericCollection = require('../models/data-collection-class')
    // const path = req.params.path
    // const model = require(`../models/${path}`)
    // const router = express.Router()
    
    // const someName =  new GenericCollection(model)
    
    // router.get(getAll)
    // router.get(`/:id`,getOne)
    // router.post(createItem)
    // router.put(`/:id`,updateItem)
    // router.delete(`/:id`,deleteItem)
    
    // async function getAll(request,response){
    //     let items = await someName.read()
    //     response.status(200).json(items)
    // }
    
    // async function getOne(request,response){
    //     let id = request.params.id
    //     let item = await someName.read(id)
    //     response.status(200).json(item)
    // }
    
    // async function createItem(request,response){
    //     let data = rerequestq.body
    //     let createItem = await someName.create(data)
    //     response.status(201).json(createItem)
    // }
    
    // async function updateItem(request,response){
    //     let id = request.params.id
    //     let data =request.body
    //     let updateItem = await someName.update(id,data)
    //     response.status(200).json(updateItem)
    // }
    
    // async function deleteItem(request,response){
    //     let id = request.params.id
    //     await someName.delete(id)
    //     response.status(200).json({msg:'deleted!'})
    // }
}


module.exports = wrapper