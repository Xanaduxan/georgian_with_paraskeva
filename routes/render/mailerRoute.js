const router = require('express').Router();

const { mailer, messageCreator } = require('../../config/nodemailerConfig');

router.post('/', async (req, res) => {
  // получение значений из тела запроса
  const {
    fullname, email, phone, textarea,
  } = req.body;

  const subject = 'New order';
  const text = `Новый заказ от ${fullname}. Почта: ${email}. Телефон: ${phone}. Комментарий: ${textarea}`;

  // формирование письма на почту + клиентское информирование

  const message = messageCreator(subject, text);

  // фактическая отправка письма на почту пользователя
  mailer(message);
  
  // JSON ответ для редиректа на панель управления
  res.json({ sending: true, message: 'Предварительная заявка отправлена. Ожидайте звонка' });
  
});

module.exports = router;
