const dbConnect=require("./mongodb.js");

const updateData= async()=>{
let data= await dbConnect();  
let result=await data.updateOne({"name":"iphone"},{$set :{"name":"iphoneUpdated",price:999}}) 
console.log(data)
//this will update the data for only one record where name is "iphone" where it set new values for respective keysNames 
// because of updateOne but if we want to update all records so use only update
// let result=await data.update({"name":"iphone"},{$set :{"name":"iphoneUpdated",price:999}}) 
}

updateData();   