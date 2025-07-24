document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-cookie-modal]');
  const acceptBtn = document.querySelector('[data-cookie-accept]');
  const declineBtn = document.querySelector('[data-cookie-decline]');

  // Проверка: если пользователь уже выбрал
  const savedChoice = localStorage.getItem('cookieConsent');
  if (!savedChoice) {
    modal.classList.remove('hidden'); // Показать модалку
  }

  const handleChoice = choice => {
    localStorage.setItem('cookieConsent', choice); // 'accepted' или 'declined'
    modal.classList.add('hidden'); // Скрыть модалку
  };

  acceptBtn.addEventListener('click', () => handleChoice('accepted'));
  declineBtn.addEventListener('click', () => handleChoice('declined'));
});
