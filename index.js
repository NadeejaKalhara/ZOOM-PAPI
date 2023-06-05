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
    url: 'https://elkalhara.wixsite.com/mysite-1'+req.url,
    headers: {
      authorization:req.headers['authorization']
    }
  };
  request(options, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 res.status(response.statusCode).send(body.replace("This site was designed with the ","Made with ❤️ by Minindu Dananjaya").replace(`<div data-testid="bannerLogo" style="direction:ltr;display:inline-flex"><div><svg class="e5cW_9" viewBox="0 0 28 10.89" aria-label="wix"><path d="M16.02.2c-.55.3-.76.78-.76 2.14a2.17 2.17 0 0 1 .7-.42 3 3 0 0 0 .7-.4A1.62 1.62 0 0 0 17.22 0a3 3 0 0 0-1.18.2z" class="o4sLYL"></path><path d="M12.77.52a2.12 2.12 0 0 0-.58 1l-1.5 5.8-1.3-4.75a4.06 4.06 0 0 0-.7-1.55 2.08 2.08 0 0 0-2.9 0 4.06 4.06 0 0 0-.7 1.55L3.9 7.32l-1.5-5.8a2.12 2.12 0 0 0-.6-1A2.6 2.6 0 0 0 0 .02l2.9 10.83a3.53 3.53 0 0 0 1.42-.17c.62-.33.92-.57 1.3-2 .33-1.33 1.26-5.2 1.35-5.47a.5.5 0 0 1 .34-.4.5.5 0 0 1 .4.5c.1.3 1 4.2 1.4 5.5.4 1.5.7 1.7 1.3 2a3.53 3.53 0 0 0 1.4.2l2.8-11a2.6 2.6 0 0 0-1.82.53zm4.43 1.26a1.76 1.76 0 0 1-.58.5c-.26.16-.52.26-.8.4a.82.82 0 0 0-.57.82v7.36a2.47 2.47 0 0 0 1.2-.15c.6-.3.75-.6.75-2V1.8zm7.16 3.68L28 .06a3.22 3.22 0 0 0-2.3.42 8.67 8.67 0 0 0-1 1.24l-1.34 1.93a.3.3 0 0 1-.57 0l-1.4-1.93a8.67 8.67 0 0 0-1-1.24 3.22 3.22 0 0 0-2.3-.43l3.6 5.4-3.7 5.4a3.54 3.54 0 0 0 2.32-.48 7.22 7.22 0 0 0 1-1.16l1.33-1.9a.3.3 0 0 1 .57 0l1.37 2a8.2 8.2 0 0 0 1 1.2 3.47 3.47 0 0 0 2.33.5z"></path></svg></div><div class="uJDaUS">.com</div></div>`,'').replace('Create your website today.',"").replace('website builder.','').replaceAll('Wix','Minindu Dananjaya').replaceAll('wix.com','minindu.cloud/?=').replaceAll('© 2035 by TrackMate','© 2023').replaceAll('Start Now',"My Profile").replaceAll('https://elkalhara.wixsite.com','').replaceAll('Powered and secured','Developed '))})


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


