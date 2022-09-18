import React from 'react';

const Loginpage = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className="h-screen flex bg-gray-bg1">
            <div
                className="
             w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-xl py-10 px-16"
            >
                <h1 className="text-2xl text-blue-700 font-medium text-primary mt-4 mb-12 text-center">
                    Log in to your account
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label className="text-blue-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label className="text-blue-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                        />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button
                            className={`bg-blue-400 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark
                            hover:bg-blue-800 
                            hover:text-white
                            w-40
                            `}
                        >
                            Login
                        </button>
                        <h5 className="text-blue-700 mx-1 pl-3 cursor-pointer hover:text-blue-900">
                            Create an Account?
                        </h5>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Loginpage;
