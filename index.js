import './style.css';



document.getElementById('menuButton').addEventListener('click', function() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
});
  
document.getElementById('overlay').addEventListener('click', function() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    sideMenu.classList.remove('active');
});