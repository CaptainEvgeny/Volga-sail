// Initialize Animate On Scroll library
AOS.init({
  duration: 800, // Animation duration in milliseconds
  once: true, // Whether animation should happen only once - while scrolling down
  offset: 50, // Offset (in px) from the original trigger point
}); 

document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== menuToggle) {
            document.getElementById('sidebar').classList.remove('active');
        }
});
//работа с формой
document.getElementById('openForm').onclick = function() {
    document.getElementById('formModal').style.display = "block";
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('formModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('formModal')) {
        document.getElementById('formModal').style.display = "none";
    }
}
