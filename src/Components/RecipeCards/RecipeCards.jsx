import SingleCard from "../SingleCard/SingleCard";
import { PropTypes } from 'prop-types';

const RecipeCards = ({ recipes, handleWantToCook }) => {
    return (
        <div className="lg:w-4/6 grid md:grid-cols-2 gap-4">
            {
                recipes.map((recipe, idx) => <SingleCard
                    key={idx}
                    recipe={recipe}
                    handleWantToCook={handleWantToCook}
                ></SingleCard>)
            }
        </div>
    );
};

export default RecipeCards;

RecipeCards.propTypes = {
    recipes: PropTypes.array,
    handleWantToCook: PropTypes.func,
}