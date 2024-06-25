import express from 'express';

const app = express();

app.use(express.static('./'));

app.listen(process.env.PORT,()=>{
  console.log('Server is running!');
});
