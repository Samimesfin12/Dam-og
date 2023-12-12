function toggleNav() {
    var nav = document.querySelector('.slide-nav');
    var exitBtn = document.querySelector('.exit-btn');
    var menuBtn = document.querySelector('.menu-btn');
  
    
    nav.style.width = nav.style.width === '260px' ? '0' : '260px';
  
  // document.body.style.backgroundColor = menuBtn.style.display === 'block' ? 'rgba(0,0,0,0.6)' : '';
    
    // Toggle visibility of exit button and menu button based on the navigation state
    exitBtn.style.display = exitBtn.style.display === 'block' ? 'none' : 'block';
    menuBtn.style.display = menuBtn.style.display === 'none' ? 'block' : 'none';
    
    
    
    
 var menuBtns = document.querySelectorAll('.menu-btn');
    var exitBtns = document.querySelectorAll('.exit-btn');

    // Add click event listener to each menu button
    menuBtns.forEach(function(menuBtn) {
      menuBtn.addEventListener('click', function() {
        // Add a background color to the body when a menu button is clicked
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      });
    });

    // Add click event listener to each exit button
    exitBtns.forEach(function(exitBtn) {
      exitBtn.addEventListener('click', function() {
        // Remove the background color from the body when an exit button is clicked
        document.body.style.backgroundColor = '';
      });
    });
    
}

    // Get the menu and exit buttons by their IDs
   /* var menuBtn = document.getElementById('menuBtn');
    var exitBtn = document.getElementById('exitBtn');

    // Add click event listener to the menu button
    menuBtn.addEventListener('click', function() {
      // Add a background color to the body when the menu button is clicked
      document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    });

    // Add click event listener to the exit button
    exitBtn.addEventListener('click', function() {
      // Remove the background color from the body when the exit button is clicked
      document.body.style.backgroundColor = '';
    });*/
// Get the menu and exit buttons by their class names
   var menuBtns = document.querySelectorAll('.menu-btn');
    var exitBtns = document.querySelectorAll('.exit-btn');

    // Add click event listener to each menu button
    menuBtns.forEach(function(menuBtn) {
      menuBtn.addEventListener('click', function() {
        // Add a background color to the body when a menu button is clicked
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      });
    });

    // Add click event listener to each exit button
    exitBtns.forEach(function(exitBtn) {
      exitBtn.addEventListener('click', function() {
        // Remove the background color from the body when an exit button is clicked
        document.body.style.backgroundColor = '';
      });
    });




//----slider//

let currentSlide = 0;

    function showSlide(index) {
        const slider = document.getElementById('slider');
        currentSlide = index;
        const translateValue = -index * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % document.querySelectorAll('.slide').length;
        showSlide(currentSlide);
    }

  function prevSlide() {
        if (currentSlide > 1) {
            currentSlide = (currentSlide + 1) % document.querySelectorAll('.slide').length;
        } else {
            currentSlide = document.querySelectorAll('.slide').length + 1;
        }
        showSlide(currentSlide);
    }

    // Auto Slide
    setInterval(nextSlide, 4000); // Change slide every 3 seconds
    
    
    
    
/*function prevSlide() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
    showSlide(currentSlide);
}

    */
    
    
    
    
    
    
function showSlide(index) {
    const slider = document.getElementById('slider');
    currentSlide = index;
    const translateValue = -index * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';

    // Highlight the active bullet
    const bullets = document.querySelectorAll('.slider-bullet');
    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('active', i === index);
    });
}

    
    
    
    
    //counter//
  function startCounting(elementIds, maxValues) {
    elementIds.forEach((elementId, index) => {
      let count = 0;
      const countElement = document.getElementById(elementId + 'Count');

      function updateCounter() {
        countElement.textContent = count;
        count++;
        if (count > maxValues[index]) {
          clearInterval(interval);
        }
      }

      const interval = setInterval(updateCounter, 100); // Adjust the interval based on your preference
    });
  }

  startCounting(['subscribers', 'visitors', 'donater'], [2500, 5100, 1100]);