// EMBRACECANVAS LTD - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (!name.value.trim()) {
                isValid = false;
                displayError(name, 'Please enter your name');
            } else {
                removeError(name);
            }

            if (!email.value.trim()) {
                isValid = false;
                displayError(email, 'Please enter your email');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                displayError(email, 'Please enter a valid email');
            } else {
                removeError(email);
            }

            if (!message.value.trim()) {
                isValid = false;
                displayError(message, 'Please enter your message');
            } else {
                removeError(message);
            }

            if (isValid) {
                // In a real implementation, you would submit the form to a server
                // For now, just show a success message
                const formGroups = contactForm.querySelectorAll('.form-group');
                formGroups.forEach(group => {
                    group.style.display = 'none';
                });

                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.style.display = 'none';

                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                successMessage.style.color = 'green';
                successMessage.style.padding = '1rem';
                successMessage.style.textAlign = 'center';

                contactForm.appendChild(successMessage);

                // Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.reset();
                    formGroups.forEach(group => {
                        group.style.display = 'block';
                    });
                    submitButton.style.display = 'block';
                    successMessage.remove();
                }, 5000);
            }
        });
    }

    function displayError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error-message');

        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '0.8rem';
            errorElement.style.marginTop = '0.3rem';
            formGroup.appendChild(errorElement);
        }

        errorElement.textContent = message;
        input.style.borderColor = 'red';
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');

        if (errorElement) {
            errorElement.remove();
        }

        input.style.borderColor = '#ddd';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Testimonial slider (simple version)
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    if (testimonials.length > 1) {
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });

        // Create navigation dots
        const sliderContainer = document.querySelector('.testimonial-slider');
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        dotsContainer.style.marginTop = '1.5rem';
        dotsContainer.style.display = 'flex';
        dotsContainer.style.justifyContent = 'center';
        dotsContainer.style.gap = '0.5rem';

        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.style.width = '12px';
            dot.style.height = '12px';
            dot.style.borderRadius = '50%';
            dot.style.background = index === 0 ? 'var(--primary-color)' : '#ddd';
            dot.style.border = 'none';
            dot.style.cursor = 'pointer';

            dot.addEventListener('click', () => {
                showTestimonial(index);
            });

            dotsContainer.appendChild(dot);
        });

        sliderContainer.appendChild(dotsContainer);

        // Automatic slider
        setInterval(() => {
            let nextTestimonial = currentTestimonial + 1;
            if (nextTestimonial >= testimonials.length) {
                nextTestimonial = 0;
            }
            showTestimonial(nextTestimonial);
        }, 5000);
    }

    function showTestimonial(index) {
        const dots = document.querySelectorAll('.slider-dot');

        testimonials[currentTestimonial].style.display = 'none';
        dots[currentTestimonial].style.background = '#ddd';

        testimonials[index].style.display = 'block';
        dots[index].style.background = 'var(--primary-color)';

        currentTestimonial = index;
    }
});