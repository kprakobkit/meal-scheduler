$(document).ready(function(){
  $('form').submit(function(e) {
    e.preventDefault();
    $('.recipe').hide();
    $('.loading').show();
    $('.recipe-link').remove();
    $('.recipes').show();
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
        var recipeElement = document.createElement('p');
        var linkElement = document.createElement('a');
        recipeElement.className = 'recipe-link';
        linkElement.innerHTML = recipeName;
        linkElement.href='#';
        linkElement.dataset.recipename = recipeName;
        recipeElement.appendChild(linkElement);
        $('.recipes').append(recipeElement);
      });
    });
  });

  $('.recipes').on('click', 'a', function(e) {
    e.preventDefault();
    $('.recipe').empty();
    $('.recipes').hide();
    $('div .recipe').show();
    var headerElement = document.createElement('h3');
    headerElement.innerHTML = this.dataset.recipename;
    $('.recipe').append(headerElement);
  });
});
