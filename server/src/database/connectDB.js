import mongoose from "mongoose";

let isConnected = false;

export const ConnectDB = async () => {
      const { MONGODB_URI, MONGODB_NAME } = process.env;

      if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables.");
      }

      if (!MONGODB_NAME) {
            throw new Error("MONGODB_NAME is not defined in environment variables.");
      }

      if (isConnected) {
            console.log("MongoDB already connected");
            return;
      }

      try {
            const db = await mongoose.connect(`${MONGODB_URI}/${MONGODB_NAME}`);
            isConnected = true;
            console.log(`MongoDB connected: ${db.connection.host}`);
      } catch (err) {
            console.error("MongoDB connection error:", err);
            throw err;
      }
};
