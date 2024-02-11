const express = require('express');
const serverless = require('serverless-http');
const indexRouter = require('./routes/routes');
const mongoose = require('mongoose');
const path = require('path');
const { schema } = require('./scheme/characterScheme');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);

async function comics(PORT, CDB_URL) {
  try {
    app.listen(PORT)
    console.log(`server started in port:3000`);
    await mongoose.connect(CDB_URL);
    console.log(`connected to DB`);
    await mongoose.model('Character', schema).findOne();
  } catch (e) {
    console.error(e);
  }
}
const handler = serverless(app);

module.exports.handler = async (event, context) => {
  mongoose.connect(CDB_URL);
  return await handler(event, context);
};

const PORT = 3000;
comics(PORT, process.env.CDB_URL);