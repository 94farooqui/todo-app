import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  profile: {
    fullName: { type: String },
    bio: { type: String },
    avatarUrl: { type: String },
    socialLinks: {
      facebook: { type: String },
      twitter: { type: String },
    },
  },
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

    next()
})

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// Method to compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    console.log(enteredPassword)
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
