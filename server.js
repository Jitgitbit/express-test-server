const express = require('express');

const app = express();

const port = process.env.PORT || 3789;

app.get('/', (req, res)=>{
  console.log('hi there');
  res.send('hello world')
})
app.listen(port, () => {
  console.log('server started')
});