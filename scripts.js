// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const id = section.getAttribute('id');
            document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            sections.forEach(s => {
                if (s.getAttribute('id') !== id) {
                    document.querySelector(`nav a[href="#${s.getAttribute('id')}"]`).classList.remove('active');
                }
            });
        }
    });
});
