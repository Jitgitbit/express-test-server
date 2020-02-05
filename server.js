const express = require('express');

const app = express();

const port = process.env.PORT || 3789;

// const connection = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:postgres/5432');
const connection = new Sequelize(process.env.DATABASE_URL || 'https://express-server-app-exercise.herokuapp.com/');

app.get('/', (req, res)=>{
  console.log('hi there');
  res.send('hello world')
})

app.listen(port, () => {
  console.log('server started')
});


// ec2-54-246-89-234.eu-west-1.compute.amazonaws.com