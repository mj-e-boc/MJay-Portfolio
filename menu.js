
const hamburger = document.querySelector(".mobile");
const mobilemenu = document.querySelector(".mobilemenu");

const bar = document.querySelector('.bar');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobilemenu.classList.toggle('active');
  bar.style.color = '#fff';
});
document.querySelectorAll('.menuitem').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
  mobilemenu.classList.remove('active');
}));