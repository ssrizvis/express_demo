const express = require('express');
const router = express.Router();

const users = require('../../Constatnts')

router.get('/', (req, res) => {
  res.status(200).json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(user => user._id === req.params.id);
  console.log(parseInt(req.params.id))
  if(user)  return res.status(200).json(user);
  return res.status(404).send({message: `No user found with Id: ${req.params.id}`})
});

router.post('/', (req, res) => {
    users.push(req.body);
    return res.status(200).json(users[users.length-1]);
});

router.put('/:id', (req, res) => {
  const user = users.find(user => user._id === req.params.id);
  if(user){
    users[users.indexOf(user)] = req.body;
    return res.status(200).json(req.body);
  }  
  return res.status(404).send({message: `No user found with Id: ${req.params.id}`})
});

router.delete('/:id', (req, res) => {
  const user = users.find(user => user._id === req.params.id);
  if(user){
    users.splice(users.indexOf(user), 1);
    return res.status(200).json(user);
  }
  return res.status(404).send({message: `No user found with Id: ${req.params.id}`})
});

module.exports = router;

