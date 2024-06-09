document.addEventListener('DOMContentLoaded', () => {
  const userBox = document.querySelector('.userBox');
  const nav = document.querySelector('.nav');

  userBox.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });

  const modals = document.querySelectorAll('.modal');
  const closeModalButtons = document.querySelectorAll('.close');

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (event) => {
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });

  const links = document.querySelectorAll('.menuContent ul li a');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const modal = document.querySelector(link.getAttribute('href'));
      modal.style.display = 'block';
    });
  });

  const fontSizeRange = document.getElementById('font-size-range');
  const display = document.querySelector('.display');

  fontSizeRange.addEventListener('input', () => {
    display.style.fontSize = fontSizeRange.value + 'px';
  });
});

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['%', '*', '/', '-', '+', '='];
let output = '';

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === '=' && output !== '') {
    output = eval(output.replace('%', '/100'));
  } else if (btnValue === 'AC') {
    output = '';
  } else if (btnValue === 'DEL') {
    output = output.toString().slice(0, -1);
  } else {
    if (output === '' && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Dark mode toggle functionality
  darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.nav').classList.toggle('dark-mode');
    document.querySelector('.display').classList.toggle('dark-mode');
    document.querySelectorAll('.buttons button').forEach(button => {
      button.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.toggle('dark-mode');
      modal.querySelector('.modal-content').classList.toggle('dark-mode');
    });
    document.querySelectorAll('.close').forEach(button => {
      button.classList.toggle('dark-mode');
    });
  });
});

// my profile 
function scrollToForm() {
  document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
  });
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Thank you for your message!');
      document.getElementById('contact-form').reset();
  } else {
      alert('Please fill out all fields.');
  }
}

// background 
