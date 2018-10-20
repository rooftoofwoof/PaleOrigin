import mongoose from "mongoose";

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost/PaleOrigin");
  mongoose.connection.once("open", () => console.log("Mongodb IS ALIVE!@!")).on("error", err => console.error(err));
};
