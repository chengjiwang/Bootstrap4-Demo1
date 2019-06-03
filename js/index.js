$( document ).ready(function() {
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  $('#js-menu a').on('click', function() {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 50 //scrollTop 是scroll的垂直位置
    }, 1000);
    return false;
  });
  $('#navbarNavDropdown a').click(function() {
      $('#navbarNavDropdown').toggleClass('show');
  }); //end click 
});