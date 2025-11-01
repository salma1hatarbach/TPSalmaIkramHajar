const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#fff';
  } else {
    document.body.style.backgroundColor = '#f3f3f3';
    document.body.style.color = '#333';
  }
});
