const dbConnect=require("./mongodb.js");

const deleteData= async()=>{
let data= await dbConnect();  
let result=await data.deleteOne({"name":"iphoneUpdated"}) 
if(result.acknowledge){
    console.log("deleted")
}
//this will delete the data for only one record where name is "iphoneUpdated" where it set new values for respective keysNames 
// because of deleteOne but if we want to delete all records so use only deleteMany
// let result=await data.deleteMany({"name":"iphone"}) 
}

deleteData();   