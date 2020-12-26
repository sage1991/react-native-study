import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface UserModel {
  email: string;
  password: string;
}

export interface UserDocument extends UserModel, Document {
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema: Schema<UserModel> = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

userSchema.pre<UserDocument>("save", function(next: (error?: mongoose.NativeError) => void) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (error, salt) => {
    if (error) return next(error);

    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);
      user.password = hash;
      next();
    });
  });
})

userSchema.methods.comparePassword = function(candidatePassword: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
      if (error) return reject(error);
      isMatch ? resolve(isMatch) : reject(isMatch);
    });
  });
}

export const User = mongoose.model<UserDocument>("User", userSchema);