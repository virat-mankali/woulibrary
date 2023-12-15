<!DOCTYPE html>
<html lang="en">
<head>
    <script defer src="script.js"></script>
</head>
<body>
    <!-- Your existing body content here -->

    <!-- Add the following script tag at the end of your body tag -->
    <script>
        const hireButtons = document.querySelectorAll('.hire-btn');
        const navbar = document.querySelector('.navbar');

        // Smooth scroll function
        function smoothScroll(target) {
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }

        // Add click event listeners to hire buttons for smooth scrolling
        hireButtons.forEach(button => {
            button.addEventListener('click', () => {
                smoothScroll('.footer');
            });
        });

        // Change navbar color on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = '#ffffff';
                navbar.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = 'transparent';
                navbar.style.boxShadow = 'none';
            }
        });
    </script>
</body>
</html>
