function move($element, movements, time) {
    if (movements.length > 0) {
      $element.animate(movements[0], time, function() {
        movements.shift();
        move($element, movements, time);
      });
    }
  }
  
  function animateEye() {
      move($('.pupil'), [
         { left: '+=2' },
         { top: '+=2' },
         { left: '+=-4' }, 
         { top: '+=-2' }, 
         { left: '+=2' }
      ], 800);
  }
  
  var interval = setInterval(animateEye, 800 * 5 + 3000); 
  
  animateEye();


  