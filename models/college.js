const mongoose=require('mongoose');
const collegedb=require('../config/collegedb')
 
const Schema=mongoose.Schema;

const professorschema = new Schema({
    name : {type:String,required:true},
    dept : {type:String,required:true},
    contact : {type:String},
     classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
});

const studentschema = new Schema({
    id : {type:String,required:true},
    name : {type:String,required:true},
    course : {type:String,required:true},
     classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
});

const classschema = new Schema({
    coursename:{type:String,required:true},
    courseid:{type:String,required:true},
    professor: [{ type: Schema.Types.ObjectId, ref: 'professor' }],
    student: [{ type: Schema.Types.ObjectId, ref: 'student' }]

})

const professor=mongoose.model('professor',professorschema);
const student=mongoose.model('student',studentschema);
const Class=mongoose.model('Class',classschema);

module.exports={professor,student,Class};