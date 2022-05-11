import React from 'react'
import { Link } from 'react-router-dom';
import australia from '../image/autralia.jpg';
import bangladesh from '../image/bangladesh.jpg';
import bhutan from '../image/bhutan.jpg';
import india from '../image/india.jpg';
import japan from '../image/japan.jpg';
import malaysia from '../image/malayasia.jpg';
const Offerpage = () => {
    const onOffer = () => {

    }
  return (
      <div className="flex flex-col justify-center items-center bg-gray-200">
    <p className="text-6xl mr-2 text-purple-700 pt-3 font-semibold">
       All Our Offers
    </p>
    <p className="text-2xl pt-9">
        Book Now Before The Time Runs Out.
    </p>
    <div className="grid grid-cols-3 gap-8 pt-10 px-4">
        <div>
            <img src={australia} alt="" />
            <div className="flex flex-col justify-center align-center">
                <p className="flex justify-center align-center text-gray-700 text-xl pt-2 ">
                    Australia
                </p>
                <br />
                <button
                    onClick={onOffer}
                    className="text-white bg-purple-700 rounded p-2 text-base hover:text-lg"
                >
                    <Link to="/login">Book Now</Link>
                </button>
            </div>
        </div>
        <div>
            <img src={bangladesh} alt="" />

            <div className="flex flex-col justify-center align-center">
                <p className="flex justify-center align-center text-gray-700 text-xl pt-2 ">
                    Bangladesh
                </p>
                <br />
                <button
                    onClick={onOffer}
                    className="text-white bg-purple-700 rounded p-2 text-base hover:text-lg"
                >
                    <Link to="/login">Book Now</Link>
                </button>
            </div>
        </div>
        <div>
            <img src={bhutan} alt="" />

            <div className="flex flex-col justify-center align-center">
                <p className="flex justify-center align-center text-gray-700 text-xl pt-2 ">
                    Bhutan
                </p>
                <br />
                <button
                    onClick={onOffer}
                    className="text-white bg-purple-700 rounded p-2 text-base hover:text-lg"
                >
                    <Link to="/login">Book Now</Link>
                </button>
            </div>
        </div>
        <div>
            <img src={japan} alt="" />

            <div className="flex flex-col justify-center align-center">
                <p className="flex justify-center align-center text-gray-700 text-xl pt-2 ">
                    Japan
                </p>
                <br />
                <button
                    onClick={onOffer}
                    className="text-white bg-purple-700 rounded p-2 text-base hover:text-lg"
                >
                    <Link to="/login">Book Now</Link>
                </button>
            </div>
        </div>
        <div>
            <img src={india} alt="" />
            <div className="flex flex-col justify-center align-center">
                <p className="flex justify-center align-center text-gray-700 text-xl pt-2 ">
                    India
                </p>
                <br />
                <button
                    onClick={onOffer}
                    className="text-white bg-purple-700 rounded p-2 text-base hover:text-lg"
                >
                    <Link to="/login">Book Now</Link>
                </button>
            </div>
        </div>
        <div>
            <img src={malaysia} alt="" />

            <div className="flex flex-col justify-center align-center">
                <p className="flex justify-center align-center text-gray-700 text-xl pt-2 ">
                    Malaysia
                </p>
                <br />
                <button
                    onClick={onOffer}
                    className="text-white bg-purple-700 rounded p-2 text-base hover:text-lg"
                >
                    <Link to="/login">Book Now</Link>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Offerpage