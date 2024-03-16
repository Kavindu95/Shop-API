import mongoose, { Document, Schema, model } from 'mongoose';


const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    }
);

const UserModel = model("User", UserSchema);
export default UserModel;