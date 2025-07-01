const mongoose=require('mongoose');

const hospitaldb=require('../config/hospitaldb');
 
const Schema=mongoose.Schema;

const doctorschema = new Schema({
    name : {type:String,required:true},
    specialization : {type:String,required:true},
    contact : {type:String},
    patients: [{ type: Schema.Types.ObjectId, ref: 'patient' }]
});

const patientchema = new Schema({
    name : {type:String,required:true},
    age : {type:String,required:true},
    condition : {type:String,required:true},
    doctor: { type: Schema.Types.ObjectId, ref: 'doctor' },
    room: { type: Schema.Types.ObjectId, ref: 'room',default:null }
});

const roomschema = new Schema({
    roomno:{type:String,required:true},
    is_available:{type:Boolean,default:true},
    patients: [{ type: Schema.Types.ObjectId, ref: 'patient' }]

})

const doctor=hospitaldb.model('doctor',doctorschema);
const patient=hospitaldb.model('patient',patientchema);
const room=hospitaldb.model('room',roomschema);

module.exports={doctor,patient,room};