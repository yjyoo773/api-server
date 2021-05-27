"use strict";

const express = require("express");
const router = express.Router();
const modelRouter = express.Router({ mergeParams: true });
const GenericCollection = require("../models/data-collection-class");

router.use('/',modelRouter);
// router.use("/api/v1/:path", modelRouter);

// router.get("/api/v1/:path",  (req, res) => {
router.get("/:path", (req, res) => {
  req.model = req.params.path;
  console.log("api v1", req.model);
});

modelRouter.get("/", getAll);
modelRouter.get("/:id", getOne);
modelRouter.post("/", createItem);
modelRouter.put("/:id", updateItem);
modelRouter.delete("/:id", deleteItem);

async function getAll(request, response) {
  console.log("v1 getAll", request.model);
  let someName = new GenericCollection(request.model);
  let items = await someName.read();
  console.log(items);
  response.status(200).json(items);
}

async function getOne(request, response) {
  let someName = new GenericCollection(request.model);
  let id = request.params.id;
  let item = await someName.read(id);
  response.status(200).json(item);
}

async function createItem(request, response) {
  let someName = new GenericCollection(request.model);

  let data = rerequestq.body;
  let createItem = await someName.create(data);
  response.status(201).json(createItem);
}

async function updateItem(request, response) {
  let someName = new GenericCollection(request.model);

  let id = request.params.id;
  let data = request.body;
  let updateItem = await someName.update(id, data);
  response.status(200).json(updateItem);
}

async function deleteItem(request, response) {
  let someName = new GenericCollection(request.model);

  let id = request.params.id;
  await someName.delete(id);
  response.status(200).json({ msg: "deleted!" });
}

module.exports = {router:router,modelRouter:modelRouter};

// router.get("/api/v1/:path", (req, res) => {
//   const path = req.params.path;
//   const model = require(`../models/${path}`);
//   const someName = new GenericCollection(model);

//   router.get('/api/v1/:path',getAll);
//   router.get(`/api/v1/:path/:id`, getOne);
//   router.post('/api/v1/:path',createItem);
//   router.put(`/api/v1/:path/:id`, updateItem);
//   router.delete(`/api/v1/:path/:id`, deleteItem);

//   async function getAll(request, response) {
//     let items = await someName.read();
//     console.log(items)
//     response.status(200).json(items);
//   }

//   async function getOne(request, response) {
//     let id = request.params.id;
//     let item = await someName.read(id);
//     response.status(200).json(item);
//   }

//   async function createItem(request, response) {
//     let data = rerequestq.body;
//     let createItem = await someName.create(data);
//     response.status(201).json(createItem);
//   }

//   async function updateItem(request, response) {
//     let id = request.params.id;
//     let data = request.body;
//     let updateItem = await someName.update(id, data);
//     response.status(200).json(updateItem);
//   }

//   async function deleteItem(request, response) {
//     let id = request.params.id;
//     await someName.delete(id);
//     response.status(200).json({ msg: "deleted!" });
//   }
// });

// var wrapper = (req,res)=>{

//     const GenericCollection = require('../models/data-collection-class')
//     const path = req.params.path
//     const model = require(`../models/${path}`)
//     const router = express.Router()

//     const someName =  new GenericCollection(model)

//     router.get(getAll)
//     router.get(`/:id`,getOne)
//     router.post(createItem)
//     router.put(`/:id`,updateItem)
//     router.delete(`/:id`,deleteItem)

//     async function getAll(request,response){
//         let items = await someName.read()
//         response.status(200).json(items)
//     }

//     async function getOne(request,response){
//         let id = request.params.id
//         let item = await someName.read(id)
//         response.status(200).json(item)
//     }

//     async function createItem(request,response){
//         let data = rerequestq.body
//         let createItem = await someName.create(data)
//         response.status(201).json(createItem)
//     }

//     async function updateItem(request,response){
//         let id = request.params.id
//         let data =request.body
//         let updateItem = await someName.update(id,data)
//         response.status(200).json(updateItem)
//     }

//     async function deleteItem(request,response){
//         let id = request.params.id
//         await someName.delete(id)
//         response.status(200).json({msg:'deleted!'})
//     }
// }

module.exports = router;
