class Recipe < ActiveRecord::Base
  def self.get_recipe_names(keyword)
    result = Yummly.search(keyword)
    result.map { |recipe| recipe.name }
  end
end
