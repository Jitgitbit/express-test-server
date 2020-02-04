const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  console.log('hi there');
  res.send('hello world')
})
app.listen(3789, () => {
  console.log('server started')
});