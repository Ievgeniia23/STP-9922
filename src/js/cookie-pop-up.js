document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-cookie-modal]');
  const acceptBtn = document.querySelector('[data-cookie-accept]');
  const declineBtn = document.querySelector('[data-cookie-decline]');

  const savedChoice = localStorage.getItem('cookieConsent');
  if (!savedChoice) {
    modal.setAttribute('data-visible', '');
  }

  const handleChoice = choice => {
    localStorage.setItem('cookieConsent', choice);
    modal.removeAttribute('data-visible');
  };

  acceptBtn.addEventListener('click', () => handleChoice('accepted'));
  declineBtn.addEventListener('click', () => handleChoice('declined'));
});
