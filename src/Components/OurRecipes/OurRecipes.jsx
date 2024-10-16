import { useState } from "react";
import RecipeCards from "../RecipeCards/RecipeCards";
import WantToCook from "../WantToCook/WantToCook";
import { useEffect } from "react";

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className="mt-14">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br /> Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="lg:flex gap-4 mt-10">
                <RecipeCards recipes={recipes}></RecipeCards>
                <WantToCook></WantToCook>
            </div>
        </div>
    );
};

export default OurRecipes;