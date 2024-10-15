import PropTypes from "prop-types";
import { FaRegClock, FaFire } from "react-icons/fa";

const SingleCard = ({recipe}) => {
    const {recipe_name, image, short_description, ingredients, preparing_time, calories} = recipe;

    console.log(recipe.calories);
    

    return (
        <div>
            <div className="card bg-base-100 border">
                <figure className="p-6">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="px-6 pb-6 items-center space-y-3">
                    <h2 className="text-xl font-bold">{recipe_name}</h2>
                    <p>{short_description}</p>

                    <hr />

                    <div>
                        <p className="text-lg font-semibold">Ingredients: {ingredients.length}</p>
                        <div className="mt-2">
                            {
                                ingredients.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))
                            }
                        </div>
                    </div>

                    <hr />

                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <FaRegClock />
                            <p>{preparing_time}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFire />
                            <p>{calories}</p>
                        </div>
                    </div>
                    <button className=" btn bg-green-400 rounded-xl py-2 px-5">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;

SingleCard.propTypes = {
    recipe: PropTypes.object,
};