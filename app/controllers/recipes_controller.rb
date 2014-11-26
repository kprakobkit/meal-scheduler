class RecipesController < ApplicationController
  def index
    render nothing: true, status: 200
  end

  def search
    results = Recipe.get_recipe_names(params[:keywords])

    render json: results
  end
end
