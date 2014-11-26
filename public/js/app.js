$(document).ready(function(){
  $('form').submit(function(e) {
    e.preventDefault();
    $('.loading').show();
    $('.recipe').remove();
    var data = $(this).serialize();
    var getRecipes = $.ajax({
      url: 'search',
      data: data,
      type: 'GET'
    });
    getRecipes.success(function(data){
      $('.loading').hide();
      var recipes = data;
      recipes.forEach(function(recipeName) {
        $('.recipes').append($("<p class='recipe'></p>").html(recipeName));
      });
    });
  });
});
