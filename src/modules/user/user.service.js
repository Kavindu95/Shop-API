import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../models/user.model";

export const createUser = async (userDto) => {
  const salt = await bcrypt.genSalt(8);

  const encryptPassword = await bcrypt.hash(userDto.password, salt);
  userDto.password = encryptPassword;
  const newUser = await UserModel.create(userDto);
  return newUser;
};

export const loginUser = async (userDto) => {
  const user = await UserModel.findOne({ email: userDto.email });
  if (!user) {
    let error = new Error("User Not Found");
    error.statusCode = 404;
    throw error;
  }

  const isMatch = await bcrypt.compare(userDto.password, user.password);
  if (!isMatch) {
    let error = new Error("Úser Password is worng");
    error.statusCode = 400;
    throw error;
  }

  const payload = {
    userId: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.AUTH_SECRET_KEY, {
    expiresIn: process.env.KEY_EXPIRE_TIME,
  });

  return token;
};
