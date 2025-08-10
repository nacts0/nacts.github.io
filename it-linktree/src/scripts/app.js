// This file contains the JavaScript code for the IT-themed link tree. 
// It includes functionality for handling user interactions, such as link clicks or animations.

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});