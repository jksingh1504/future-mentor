const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true, unique:true },
  password: { type: String, required: true },
  cityRef: { type: mongoose.Schema.Types.ObjectId, required: true },
  userRole:{type:String,default:"client"}
});
// remove password and version keys from response
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret.password;
  }
});

const user = mongoose.model("user", userSchema);
module.exports = user;
