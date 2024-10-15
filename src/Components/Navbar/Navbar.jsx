// import PropTypes from 'prop-types';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 px-3 md:px-0">
            <p className="text-2xl font-bold">Recipe Calories</p>

            <ul className="hidden md:flex gap-5 cursor-pointer">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>

            <div className="flex items-center gap-4">
                <div className="hidden md:block">
                    <input className="border rounded-full p-3" type="search" name="" id="" placeholder="Search" />
                </div>

                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;