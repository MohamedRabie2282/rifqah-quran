import { Schema, model, Types } from 'mongoose';

const id={type:Schema.Types.ObjectId,ref:'User'};
export const User=model('User',new Schema({fullName:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true},passwordHash:{type:String,required:true},role:{type:String,enum:['SHEIKH','STUDENT','GUARDIAN'],required:true},resetTokenHash:String,resetTokenExpiry:Date},{timestamps:true}));
export const Surah=model('Surah',new Schema({number:{type:Number,required:true,unique:true},nameAr:{type:String,required:true},versesCount:{type:Number,required:true},revelationOrder:Number,revelationPlace:{type:String,enum:['مكية','مدنية']}}));
export const Student=model('Student',new Schema({userId:{...id,required:true,unique:true},sheikhId:id,guardianId:id,joinedAt:{type:Date,default:Date.now}}));
export const Memorization=model('Memorization',new Schema({studentId:{type:Schema.Types.ObjectId,ref:'Student',required:true,index:true},surahNumber:{type:Number,ref:'Surah',required:true},fromAyah:{type:Number,required:true},toAyah:{type:Number,required:true},assignedAt:{type:Date,default:Date.now},dueAt:Date,completedAt:Date,status:{type:String,enum:['ASSIGNED','IN_PROGRESS','SUBMITTED','APPROVED','NEEDS_REVIEW'],default:'ASSIGNED'},notes:String},{timestamps:true}));
export const Evaluation=model('Evaluation',new Schema({memorizationId:{type:Schema.Types.ObjectId,ref:'Memorization',required:true},sheikhId:{...id,required:true},score:{type:Number,min:0,max:100,required:true},notes:String,evaluatedAt:{type:Date,default:Date.now}}));
export const Review=model('Review',new Schema({studentId:{type:Schema.Types.ObjectId,ref:'Student',required:true,index:true},surahNumber:{type:Number,ref:'Surah',required:true},fromAyah:Number,toAyah:Number,scheduledFor:{type:Date,required:true},completedAt:Date,notes:String}));
export const Notification=model('Notification',new Schema({userId:{...id,required:true,index:true},title:String,body:String,type:String,readAt:Date},{timestamps:true}));
export const Certificate=model('Certificate',new Schema({studentId:{type:Schema.Types.ObjectId,ref:'Student',required:true},surahNumber:Number,score:Number,filePath:String,issuedAt:{type:Date,default:Date.now}}));
export const Message=model('Message',new Schema({senderId:{...id,required:true},recipientId:{...id,required:true,index:true},body:{type:String,required:true},readAt:Date},{timestamps:true}));
export type ObjectId=Types.ObjectId;
