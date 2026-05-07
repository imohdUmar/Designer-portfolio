// Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 5px 25px rgba(255, 107, 157, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.03)';
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Testimonial Slider
        let currentSlide = 0;
        const track = document.getElementById('testimonialTrack');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = 3;

        function updateSlider() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function previousSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }

        // Auto-advance slider every 5 seconds
        setInterval(nextSlide, 5000);

        // // Form submission
        // const contactForm = document.getElementById('contactForm');
        // contactForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     // Get form data
        //     const formData = {
        //         name: document.getElementById('name').value,
        //         email: document.getElementById('email').value,
        //         phone: document.getElementById('phone').value,
        //         service: document.getElementById('service').value,
        //         message: document.getElementById('message').value
        //     };
            
// Create mailto link
        function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_fhki7hr";
  const templateID = "template_im44dmt";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("service").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>{
    console.log(err);
    alert("Something went wrong!");
});

}
        //     const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        //     const body = encodeURIComponent(
        //         `Name: ${formData.name}\n` +
        //         `Email: ${formData.email}\n` +
        //         `Phone: ${formData.phone}\n` +
        //         `Service Interested In: ${formData.service}\n\n` +
        //         `Message:\n${formData.message}`
        //     );
            
        //     // Open default email client
        //     window.location.href = `mailto:umarkhan10002@gmail.com?subject=${subject}&body=${body}`;
            
        //     // Show confirmation
        //     alert('Thank you so much for reaching out! Your email client will open to send the message. 💕');
        //     contactForm.reset();
        // });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections
        document.querySelectorAll('.about, .portfolio, .services, .testimonials, .contact').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

        // Portfolio item animations
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            observer.observe(item);
        });

        // Service card animations
        document.querySelectorAll('.service-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            observer.observe(card);
        });

        // Parallax effect for floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.2);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
