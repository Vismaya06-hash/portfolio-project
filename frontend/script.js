const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');
const API_URL = 'http://localhost:5000';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    responseMsg.textContent = result.message;
    responseMsg.className = result.success ? 'success' : 'error';
    form.reset();
  } catch (err) {
    responseMsg.textContent = 'Error sending message';
    responseMsg.className = 'error';
  }
});