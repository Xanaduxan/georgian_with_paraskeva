const feedback = document.querySelector('.feedback-form');
const editRes = document.querySelector('.editRes');
feedback.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    fullname, email, phone, textarea,
  } = e.target;
  const response = await fetch('/mail', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      fullname: fullname.value,
      email: email.value,
      phone: phone.value,
      textarea: textarea.value,
    }),
  });
  const data = await response.json();
  if (data.sending) {
    editRes.innerHTML = data.message;
    feedback.reset();
    // window.location.href = '/';
  }
});
