import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: value => validator.isEmail(value),
      message: message => "Invalid Email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

userSchema.methods.comparePasswords = async function (loginPassword) {
  const user = this;

  const isPasswordValid = await bcrypt.compare(loginPassword, user.password);

  return isPasswordValid;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password") || user.isNew) {
    const hashedPassword = await bcrypt.hash(user.password, 8);

    user.password = hashedPassword;
    return next();
  }

  return next();
});

userSchema.post("save", (error, _doc, next) => {
  if (error.code === 11000) {
    return next({ message: "Email Already Exists" });
  }

  return next();
});

// Always needs to be the last line
export const User = mongoose.model("User", userSchema);
