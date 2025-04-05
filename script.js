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
