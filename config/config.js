// const mongoose = require("mongoose");

// const ConnectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:/PaymentGateWay");
//     console.log("✅ Connected to MongoDB");

//   } catch (error) {
//     console.error("❌ Failed to connect to MongoDB:", error);
//   }
// };

// module.exports = ConnectDB;


const mongoose = require("mongoose");
const uri = "mongodb+srv://user1:sBd71J1zb216EKaJ@cluster0.bxkm2rk.mongodb.net/";
const ConnectDB = async() => {

    try{
    mongoose.connect(uri, {
        ssl: true, // تأكد من أن الاتصال باستخدام SSL
    })

    console.log("connected to mongodb");

    }catch(error){
        console.log("failed to connect to mongoDB");
        console.log("..............................................");
        console.log(error);
    }
}


module.exports = ConnectDB;