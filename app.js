require('@babel/register');
// использование данных из конфигурации файла .env
require('dotenv').config();
const express = require('express');

const config = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

// routers
const indexRouter = require('./routes/render/indexRoute');
const mailerRoute = require('./routes/render/mailerRoute');
// здесь подключаем роуты
app.use('/', indexRouter);
app.use('/mail', mailerRoute);

const { transporter } = require('./config/nodemailerConfig');

// здесь запускаем роуты

app.listen(PORT, async () => {
  console.log(`Server started ${PORT}`);
  try {
    // todo await sequelize.authenticate()
  } catch (error) {
    console.log("something's wrong");
  }

  try {
    await transporter.verify();
    console.log('Server is ready to send emails');
  } catch (error) {
    console.log('Problem with Nodemailer:');
    console.log(error.message);
  }
});
