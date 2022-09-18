import React, { useEffect, useState } from 'react';
import homepageimage from '../image/homepageimage.jpg';
import homepageimage4 from '../image/homepageimage4.jpg';
import homepageimage5 from '../image/homepageimage5.jpg';
import explorationimage from '../image/expl.jpg';
import bodyimg from '../image/bodyimg.jpg';
let count = 0;
const Dashboard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredImages = [homepageimage, homepageimage4, homepageimage5];
    const handleOnNextClick = () => {
        count = (count + 1) % featuredImages.length;
        setCurrentIndex(count);
    };

    const handleOnPrevClick = () => {
        const productsLength = featuredImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
    };
    useEffect(() => {
        startSlider();
    },[]);

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };
    return (
        <div>
            <section className="home">
                <div
                    className="
                max-w-screen-2xl m-auto"
                >
                    <div
                        className="
                    
                    w-full select-none"
                    >
                        <img
                            className="w-full h-2/5"
                            src={featuredImages[currentIndex]}
                            alt=""
                        />

                        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                            <button onClick={handleOnPrevClick}>⬅️</button>
                            <button onClick={handleOnNextClick}>➡️</button>
                        </div>
                    </div>
                </div>
                <br />

                <a
                    className="flex items-center justify-center py-8 gap-3"
                    href="/"
                >
                    <button className="bg-blue-200 px-1 rounded-full">
                        🔵
                    </button>
                    <button className="bg-blue-200 px-1 rounded-full">
                        🔵
                    </button>
                    <button className="bg-blue-200 px-1 rounded-full">
                        🔵
                    </button>
                </a>

                <div className="flex items-center justify-center gap-x-7">
                    <p
                        className=" text-2xl top-34 text-gray-800 border-2 border-white rounded-3xl h-6/12 w-6/6
                    p-10"
                    >
                        <span className="text-5xl text-blue-700 mt-2">
                            Our{''}
                        </span>
                        <span className="text-5xl text-blue-600 mt-2">
                            {' '}
                            Journey
                        </span>
                        <br />
                        <br />
                        Wherever you go, go with all your heart. Traveling, you
                        realize that differences are lost: each city takes to
                        resembling all cities, places exchange their form,
                        order, distances, a shapeless dust cloud invades the
                        continents. Flyme is the movement of people between
                        distant geographical locations. Travel can be done by
                        foot, bicycle, automobile, train, boat, bus, airplane,
                        ship or other means, with or without luggage, and can be
                        one way or round trip.
                        <br />
                        <button className="border-2 border-blue-200 text-white bg-blue-400 rounded-lg px-20 py-2 mt-6 ">
                            <a href="/offer">See Offers</a>
                        </button>
                    </p>
                    <div>
                        <img
                            className="shadow-2xl w-4/5 h-5/5 ml-20 rounded-2xl"
                            src={bodyimg}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="aboutus">
                <div className="flex mt-32">
                    <img
                        src={explorationimage}
                        className="flex w-3/5 rounded-3xl mt-8 mr-10"
                        alt=""
                    />
                    <p className="mb-35 text-2xl pt-42">
                        <span className="text-blue-500 text-3xl font-semibold">
                            Go Anywhere With {''}
                            <span className="text-blue-800 font-bold">
                                FlyMe
                            </span>
                        </span>
                        <br />
                        Fly wherever your heart wants to go with fly me.We offer
                        genuine services to our customers so that they could
                        enjoy and make the moments special.We offer various
                        packages for our desired customers at a very reasonable
                        price.Choose us and we will never let you down.We have
                        packages all over the country.Lets go and explore the
                        world like we never did before.Learn more about us where
                        we are with your side.
                        <br />
                        <button className="border-2 border-blue-200 text-white bg-blue-400 rounded-lg px-20 py-2 mt-6 ">
                            <a href="/about">More About Us</a>
                        </button>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
