import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { BookmarkIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const App = () => {
  const APP_ID = "d7ad34a4";
  const APP_KEY = "c8ee037b0eb27e21ed5f2c9be432b1d6";
  const [food_recipes, setfood_recipes] = useState([]);
  const [search_recipe, setSearch_recipe] = useState("");
  const [search_query, setSearch_Query] = useState("chicken");

  useEffect(() => {
    getRecipesFunction();
  }, [search_query]);

  const getRecipesFunction = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setfood_recipes(data.hits);
  };

  const updateSearchFunction = (e) => {
    setSearch_recipe(e.target.value);
  };

  const getSearchFunction = (e) => {
    e.preventDefault();
    setSearch_Query(search_recipe);
    setSearch_recipe("");
  };

  return (
    <div className="bg-green-200 min-h-screen font-sans flex flex-col items-center w-full pt-7">
      <div className="flex items-center justify-center w-full gap-2">
        <div className="container  flex items-center justify-center gap-2 w-full">
          <p className="text-gray-500">Recipe Finder</p>
          <form
            onSubmit={getSearchFunction}
            className=" rounded-lg flex items-center justify-center gap-1 "
          >
            <div className="relative justify-center flex-grow w-full ">
              <input
                type="text"
                name="search"
                value={search_recipe}
                onChange={updateSearchFunction}
                placeholder="Search"
                className="w-full px-4  
                                      border border-blue-300 
                                      focus:border-blue-500 rounded-full  
                                      text-gray-700 outline-none transition-colors  
                                      duration-200 ease-in-out focus:ring-2  
                                      focus:ring-blue-900 focus:bg-transparent  
                                      focus:shadow-md"
              />
            </div>
            <Button
              type="submit"
              variant="surface"
              className="bg-white
              border border-blue-300 
              focus:border-blue-500 rounded-full  
              text-gray-700 outline-none transition-colors  
              duration-200 ease-in-out focus:ring-2  
              focus:ring-blue-900 focus:bg-transparent  
              focus:shadow-md"
            >
              <MagnifyingGlassIcon width="22" height="22" />
            </Button>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  
                lg:grid-cols-4 gap-4"
        >
          {food_recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
