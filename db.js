import mongoose from "mongoose";

const URL = process.env.MONGO_URI;
console.log(URL);

const connectDB = async () => {
  await mongoose
    .connect(URL)
    .then(() => {
      console.log("DB Connected..");
    })
    .catch((err) => {
      console.log(err);
      console.log("hellllllo");
    });
};

export default connectDB;
