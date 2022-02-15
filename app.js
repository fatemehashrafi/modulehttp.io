const http=require('http');
const server =http. createServer((res,req)=>{
  console.log(req.url);
  res.write('Hello fatemeh!');
  res.end();
});
listen(3000);

const path = require ('path');
let parsepath = path.parse(__dirname);
console.log(parsepath);

const os = require('os');
console.log("free momory" , os.freemem());
console.log('total memory' , os.totalmem());

const fs = require('fs');
const text = fs.readdirSync('./');
console.log(text);

const EventEmitter = require ('events');
const emitter = new EventEmitter();
emitter.on('hi' ,()=>{
    console.log('hello faravin');
})
emitter.emit('hi');

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('hellooooooooooo');
})
server.listen(4000);

 
const moment=require('jalali-moment');
console.log(moment(new Date()).locale('fa').format('YYYY/DD/MM'));


const expers= require('express');
const app =expers();
app.get('/' ,(req,res)=>{
  res.send('hello fatemeh');
});
app.get('/api/users' ,(req,res)=>{

  res.send([
    { id: 1,name: 'fatemeh'},
    { id: 3,name:'mobina'},
  ]);
});

app.get('/api/users/:id' ,(req,res)=>{
   res.send({id:req.params.id  ,name: 'user ${eq.params.id}'});
});
    app.post('/api/users/' ,(req,res)=>{
    console.log(req.body);
    res.send('developing...');
    
});
const port=process.env.PORT||3000;
app.listen(3000,()=> console.log('listening on port 3000'));

