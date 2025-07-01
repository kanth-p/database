const mongoose=require('mongoose');

const connectcollegedb=async()=>{
    try{
        const conn = await mongoose.connect(process.env.mongo_url1);
        console.log(`MongoDB connected : ${conn.connection.host}`);

    }
    catch(err){
        console.log(`DB connection Failed : ${err.message}`);
        process.exit(1);
    }
};

module.exports=connectcollegedb;