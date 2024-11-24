// Auto-scrolling function
function autoScrollGallery() {
    const gallery = document.querySelector('.gallery-container');  // Select the gallery container
    const scrollAmount = 2;  // Number of pixels to scroll each time
    const scrollSpeed = 20;  // Speed (higher value = faster scroll)
  
    function scroll() {
      // Scroll the gallery container to the right
      gallery.scrollLeft += scrollAmount;
  
      // If we reach the end of the gallery, start scrolling from the beginning
      if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        gallery.scrollLeft = 0; // Reset the scroll position to the beginning
      }
    }
  
    // Set the interval to call the scroll function at regular intervals
    setInterval(scroll, scrollSpeed);
  }
  
  // Run the auto-scrolling function once the document is loaded
  window.onload = autoScrollGallery;
  