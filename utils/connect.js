import mongoose from "mongoose";

const connectToDb = () => {
  mongoose.connect(
    // "mongodb://admin:Life%402020@ds115434.mlab.com:19966/simpledbfortest",
    "mongodb://RanjeetAdmin:ad%40Pass77@ds019966.mlab.com:19966/simpledbfortest",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
};

export { connectToDb };
