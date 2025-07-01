const mongoose=require('mongoose');

const schooldb=require('../config/schooldb');
 
const Schema=mongoose.Schema;

const teacherschema = new Schema({
    name : {type:String,required:true},
    subject: {type:String,required:true},
    contact : {type:String},
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
});

const studentschema = new Schema({
    name : {type:String,required:true},
    grade : {type:String,required:true},
    class : {type:Schema.Types.ObjectId,ref:'Class',required:true}
});

const classschema = new Schema({
    class_name:{type:String,required:true},
    teacher:{type:Schema.Types.ObjectId,ref:'teacher',required:true},
    students: [{ type: Schema.Types.ObjectId, ref: 'student' }]

})

const teacher=schooldb.model('doctor',doctorschema);
const student=schooldb.model('patient',patientchema);
const Class=schooldb.model('room',roomschema);

module.exports={teacher,student,Class};