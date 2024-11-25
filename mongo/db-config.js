import mongoose from "mongoose";

const connectionString = 'mongodb+srv://lazulyne:minh.2174801030162@cluster.wont1tv.mongodb.net/advanced?retryWrites=true&w=majority&appName=Cluster';
let connection;
try {
    connection = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
} catch (err) {
    console.log(err)
}
export default connection;