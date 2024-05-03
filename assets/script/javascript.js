document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#flowerCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,  
        wrap: true,
        touch: true      
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;  
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        this.submit();
    });
});
