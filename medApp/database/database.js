import { mongoose } from "mongoose";

mongose.connect('mongodb://localhost:27017/med-app')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once(
   'open', () => {
    console.log('Database connected successfuly!')
   }
);

