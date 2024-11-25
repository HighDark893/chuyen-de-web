import connection from "../db-config.js";

const userSchema = new connection.Schema(
    {
        name: String,
        email: String,
        age: Number,
    },
    { timestamps: true }
);
export const User = connection.model("User", userSchema);
