import React from "react";

const Home = () => {

    return(
        <div className="home">
            <div className="home__container">
                <div className="home__button home__button--light">
                    Light theme
                </div>
                <div className="home__button home__button--dark">
                    Dark theme
                </div>
                <div className="home__button home__button--blue">
                    Blue theme
                </div>
            </div>
        </div>
    )
};

export default Home;