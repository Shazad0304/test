import dotenv from "dotenv";
import expressService from "../src/services/express.service";
import sequelizeService from "../src/services/sequelize.service";
import awsService from "../src/services/aws.service";
dotenv.config();

const services = [expressService, awsService, sequelizeService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }
    console.log("Server initialized.");
    //PUT ADITIONAL CODE HERE.
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
