import dotenv from "dotenv";
dotenv.config();

export const configSetting = {
  REPORT_CACHE: process.env.REPORT_CACHE,
  db: {
    engine: process.env.DB_ENGINE,
    postgres: {
      DB_USER: process.env.DB_POSTGRES_USER || "developer",
      DB_PASSWORD: process.env.DB_POSTGRES_PASSWORD || "developer",
      DB_SERVER: process.env.DB_POSTGRES_SERVER || "DEVELOPER",
      DB_DATA: process.env.DB_POSTGRES_DATA || "dbservices",
      DB_PORT: process.env.DB_POSTGRES_PORT || 1433,
    },
  },
};

