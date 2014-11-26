$(document).ready(function(){
  $('form').submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    console.log(data);
  });
});
