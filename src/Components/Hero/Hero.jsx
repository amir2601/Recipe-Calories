const Hero = () => {
    return (
        <>
            <div
                className="hero min-h-[50vh] md:min-h-[60vh] rounded-2xl"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1526213174737-acd9757c6bf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover an exceptional cooking class <br /> tailored for you!</h1>
                        <p className="mb-5">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, <br /> Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className="flex justify-center gap-6">
                            <button className="btn rounded-full bg-green-400 border-none">Explore Now</button>

                            <button className="btn btn-outline text-white rounded-full">Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;