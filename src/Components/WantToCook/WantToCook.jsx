import PropTypes from "prop-types";

const WantToCook = ({wantToCooks}) => {
    return (
        <div className="border rounded-2xl p-6 lg:w-2/6">
            <div className="text-center space-y-8">
                {/* Want to Cook */}

                <div className="space-y-4">
                    <p className="text-2xl font-semibold">Want to cook: 01</p>
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
                                            <td>{wantToCook.preparing_time}</td>
                                            <td>{wantToCook.calories}</td>
                                            <td className="btn mt-2 rounded-full px-4 bg-green-400">Preparing</td>
                                        </tr>
                                    ))
                                }

                                {/* <tr>
                                    <th>1</th>
                                    <td>Grilled Chicken with Basil</td>
                                    <td>30 min</td>
                                    <td>320 calories</td>
                                    <td className="btn mt-2 rounded-full px-4 bg-green-400">Preparing</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Cooking */}

                <div className="space-y-4">
                    <p className="text-2xl font-semibold">Currently cooking: 02</p>
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
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Grilled Chicken with Basil</td>
                                    <td>30 min</td>
                                    <td>320 calories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WantToCook;

WantToCook.propTypes = {
    wantToCooks: PropTypes.array
};