import 'dotenv/config';
import { ConnectDB } from './src/database/connectDB.js';
import { app } from './src/app.js';

const port = process.env.PORT || 8000;

const startServer = async () => {
      try {
            await ConnectDB();

            app.listen(port, () => {
                  console.log(`Server running at http://localhost:${port}`);
            });

            app.on('error', (error) => {
                  console.error('Server Error:', error);
            });
      } catch (error) {
            console.error('Failed to connect to the database:', error);
            process.exit(1);
      }
};

startServer();
