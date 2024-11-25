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