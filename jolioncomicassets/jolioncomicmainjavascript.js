/* Auto Scrolling Gallery */

/* I duplicate the gallery to help make the scrolling seamless!
Be sure to set the x transition to 50% too.
-50 if the items move to the left, 50 if the items move to the right!*/

document.addEventListener('DOMContentLoaded', () => {
    const scrollContent = document.querySelector('.scroll-horizontal-content');
    const contentWidth = scrollContent.scrollWidth;
    const clone = scrollContent.cloneNode(true); // Clone the content
    scrollContent.parentElement.appendChild(clone); // Append the clone
  });

/*FADE IN EFFECT*/
  document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll(".fade-in");
  
    const handleScroll = () => {
      fadeIns.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        // Check if the element is in the viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          element.classList.add("visible");
        }
      });
    };
  
    // Run on scroll and on initial load
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
  });

/*MAKE DROP DOWN MEU FOR HEADER A CLICKABLE*/
/*
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.nextElementSibling;
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
  });*/
  