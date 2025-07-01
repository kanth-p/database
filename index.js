const express=require('express');
const dotenv=require('dotenv');
const connectcollegedb=require('./config/collegedb.js');
const connecthospitaldb=require('./config/hospitaldb.js');
const connectschooldb=require('./config/schooldb.js');

dotenv.config();
connectcollegedb();
connecthospitaldb();
connectschooldb();

const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API is running....');
});

const port=process.env.port||5000;
app.listen(port,()=>{
    console.log(`server runnning on port ${port}`);
});
