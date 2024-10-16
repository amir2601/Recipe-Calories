import PropTypes from "prop-types";

const WantToCook = ({ wantToCooks, totalTime, totalCalories, currentlyCooking, handleCurrentlyCooking }) => {
    return (
        <div className="border rounded-2xl p-6 lg:w-2/6">
            <div className="text-center space-y-8">
                {/* Want to Cook */}

                <div className="space-y-4">
                    <p className="text-2xl font-semibold">Want to cook: {wantToCooks.length}</p>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wantToCooks.map((wantToCook, idx) => (
                                        <tr key={idx}>
                                            <th>{idx + 1}</th>
                                            <td>{wantToCook.recipe_name}</td>
                                            <td>{wantToCook.preparing_time} </td>
                                            <td>{wantToCook.calories}</td>
                                            <td
                                                onClick={() => handleCurrentlyCooking(wantToCook)}
                                                className="btn mt-2 rounded-full px-4 bg-green-400"
                                            >Preparing</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Cooking */}

                <div className="space-y-4">
                    <p className="text-2xl font-semibold">Currently cooking: {currentlyCooking.length}</p>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentlyCooking.map((cook, idx) => (
                                        <tr key={idx}>
                                            <th>{idx + 1}</th>
                                            <td>{cook.recipe_name}</td>
                                            <td>{cook.preparing_time}</td>
                                            <td>{cook.calories}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div className="flex justify-between mt-6 bg-slate-100 py-4 px-3 rounded-lg">
                            <p className="font-semibold">Total Time: {totalTime}</p>
                            <p className="font-semibold">Total Calories: {totalCalories}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WantToCook;

WantToCook.propTypes = {
    wantToCooks: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number,
    currentlyCooking: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func
};