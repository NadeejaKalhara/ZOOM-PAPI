var request = require('request');
var http = require('http');
var fs = require('fs');
var cors = require('cors')
const express = require('express')
var cookieParser = require('cookie-parser');
const { Console } = require('console');
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser())
app.use(cors())
app.use(cookieParser())
const path = require('path')
var port = process.env.PORT || 3000;
app.get("/_next/image", function(req, res){
  res.redirect(301, "https://aduruthuma.ml/assets/img/LSM-Logo-Light.png")
})
app.get('*', function(req, res){
  console.log(req.url)
  const options = {
    url: 'https://api.zoom.us'+req.url,
    headers: {
      authorization:req.headers['authorization']
    }
  };
  request(options, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 res.status(response.statusCode).send(body)})


})
app.post('*', function(req, res){
  console.log(req.body)
  console.log(req.url)
  const options = {
    url: 'https://api.zoom.us'+req.url,
    body:JSON.stringify(req.body),
    headers: {
      authorization:req.headers['authorization'],
    "Content-Type":"application/json"

    },
    method: 'POST',
  };
  request(options, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 res.status(response.statusCode).send(body)})

})

app.patch('*', function(req, res){
  console.log(req.url)
  const options = {
    body:JSON.stringify(req.body),
    url: 'https://api.zoom.us'+req.url,
    headers: {
      authorization:req.headers['authorization'],
    "Content-Type":"application/json"

    },
    method: 'PATCH',
  };
  request(options, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 res.status(response.statusCode).send(body)})


})
app.delete('*', function(req, res){
  console.log(req.url)
  const options = {
    url: 'https://api.zoom.us'+req.url,
    body:JSON.stringify(req.body),
    headers: {
      authorization:req.headers['authorization'],
    "Content-Type":"application/json"
    },
    method: 'DELETE',
  };
  request(options, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 res.status(response.statusCode).send(body)})


})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


