import React from 'react';
import homepageimage from '../image/homepageimage.jpg';
import explorationimage from '../image/explorationimage.png';
const Dashboard = () => {
    return (
        <div>
            <section className="home">
                <div className="">
                    <img
                        className="absolute"
                        src={homepageimage}
                        alt="homepage"
                    />
                    <p
                        className="relative text-2xl top-24 text-gray-800 border-2 border-white rounded-3xl h-6/12 w-2/5
                    p-10"
                    >
                        <span className="text-5xl text-blue-200 mt-2">
                            Flyme!
                        </span>
                        <br />
                        Where The Journey Begins! Wherever you go, go with all
                        your heart. Traveling, you realize that differences are
                        lost: each city takes to resembling all cities, places
                        exchange their form, order, distances, a shapeless dust
                        cloud invades the continents. Flyme is the movement of
                        people between distant geographical locations. Travel
                        can be done by foot, bicycle, automobile, train, boat,
                        bus, airplane, ship or other means, with or without
                        luggage, and can be one way or round trip.
                        <br />
                        <button className="border-2 border-blue-400 text-blue-900 bg-blue-200 rounded-lg p-3 mt-3 ">
                            <a href="/offer">See Offers</a>
                        </button>
                    </p>
                </div>
            </section>
            <section className="aboutus">
                <div className="flex">
                    <img src={explorationimage} className='flex h-2/4 mt-20' alt="" />
                    <p className='mt-40 text-2xl pt-35'>
                        <span className='text-purple-700 text-3xl'>
                            Fly Anywhere With FlyMe
                        </span>
                        <br />
                        Fly wherever your heart wants to go with fly me.We offer genuine services to our customers so that they could enjoy and make the moments special.We offer various packages for our desired customers at a very reasonable price.Choose us and we will never let you down.We have packages all over the country.Lets go and explore the world like we never did before.Learn more about us where we are with your side.
                        <br />
                     <button className="border-2 rounded-full bg-purple-700 text-white py-2 px-4  mt-3 ">
                            <a href="/about">More About Us</a>
                        </button>
                    </p>
                   
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
