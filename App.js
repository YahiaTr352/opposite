const express = require("express");
const connectDB = require("./config/config");
const clientRoutes = require("./routes/clientRoutes");
const customerRoutes = require("./routes/customerRoutes");
const merchantRoutes = require("./routes/merchantRoutes");
const cors = require("cors");
const ensureTTLIndex = require("./utils/ensureTTLIndex");

  const app = express();
    const port = process.env.Port || 5000;

    // ✅ إعدادات عامة
    const BASE_API_URL2 = "http://localhost:3000"; 
    app.use(cors({ origin: BASE_API_URL2, credentials: true }));
    app.use(express.json());

    // ✅ اتصالات بقاعدة البيانات
    connectDB();
    ensureTTLIndex();

    // ✅ الراوتس
    app.use("/api/clients", clientRoutes);
    app.use("/api/customers", customerRoutes);
    app.use("/api/merchants", merchantRoutes);

    // ✅ تشغيل السيرفر
    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
