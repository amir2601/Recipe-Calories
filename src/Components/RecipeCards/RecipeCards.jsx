import SingleCard from "../SingleCard/SingleCard";
import { PropTypes } from 'prop-types';

const RecipeCards = ({ recipes }) => {
    return (
        <div className="md:w-4/6 grid md:grid-cols-2 gap-4">
            {
                recipes.map((recipe, idx) => <SingleCard
                    key={idx}
                    recipe={recipe}
                ></SingleCard>)
            }
        </div>
    );
};

export default RecipeCards;

RecipeCards.propTypes = {
    recipes: PropTypes.array
}