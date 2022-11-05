
import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-nrdfop6-shard-00-00.zgb5ge2.mongodb.net:27017,ac-nrdfop6-shard-00-01.zgb5ge2.mongodb.net:27017,ac-nrdfop6-shard-00-02.zgb5ge2.mongodb.net:27017/?ssl=true&replicaSet=atlas-2axxz6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Error while connecting with the database", error);
    }
}

export default Connection;