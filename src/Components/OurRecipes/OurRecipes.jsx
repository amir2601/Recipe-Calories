import { useState } from "react";
import RecipeCards from "../RecipeCards/RecipeCards";
import WantToCook from "../WantToCook/WantToCook";
import { useEffect } from "react";

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCooks, setWantToCooks] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const handleWantToCook = (recipe) => {
        const isExist = wantToCooks.find(wtc => wtc.id === recipe.id);
        if (!isExist) {
            setWantToCooks([...wantToCooks, recipe]);
        } else {
            alert('EIta ase re vai');
        }

        console.log(recipe);
    };

    return (
        <div className="mt-14">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br /> Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="lg:flex gap-4 mt-10">
                <RecipeCards
                    recipes={recipes}
                    handleWantToCook={handleWantToCook}
                ></RecipeCards>
                <WantToCook
                    wantToCooks={wantToCooks}
                ></WantToCook>
            </div>
        </div>
    );
};

export default OurRecipes;