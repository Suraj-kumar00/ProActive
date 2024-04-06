import React from "react";

const SignUpPage = () => {
  return (
    <div className="font-serif flex justify-center items-center h-screen  bg-[url('./Images/Background_Image.png')]  ">
      <div className="bg-gray-700  border-slate-700 border-6 box-content h-[546px] w-[450px]  rounded-2xl pl-[50px] pr-[9px] pt-[50px] pb-[38px] mt-[65px] ml-[-780px]">
        <div>
          <h1 className="text-white font-bold flex justify-start text-3xl ">
            Get Started Now
          </h1>
        </div>
        <div>
          <div>
            {" "}
            <div>
              <h1 className="text-white flex justify-start mt-[10px] font-bold">
                Name
              </h1>
            </div>
          </div>
          <input
            className="border-gray-500 border-2 flex justify-start w-[400px] my-2 rounded-lg bg-gray-700 p-[5px] text-white"
            type="name"
            name="text"
            placeholder=" enter  your name"
          ></input>
          <div>
            {" "}
            <div>
              <h1 className="text-white flex justify-start font-bold">
                Email Address
              </h1>
            </div>
          </div>
          <input
            className="border-gray-500 border-2 flex justify-start w-[400px] my-2 rounded-lg bg-gray-700 p-[5px] text-white"
            type="email"
            name="email"
            placeholder=" enter  your email"
          ></input>
        </div>
        <div className="flex justify-between">
          <div className=" text-white  font-bold  ">Password</div>
          <a href="Frontend\src\components\ForgotPassword.jsx" className="text-red-400 font-semibold mr-12 cursor-pointer hover:text-red-600">
        
           forget Password
          </a>
        </div>
        <div>
          <input
            className="border-gray-500 border-2 mb-5 flex justify-start w-[400px] my-2 rounded-lg opacity-0.5 bg-gray-700 p-[5px] text-white"
            type="password"
            name="password"
            placeholder=" Password"
          ></input>
          <div>
            <div class="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                for="link-checkbox"
                class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
          </div>
        </div>
        <div className=" ">
          <button
            className="bg-purple-800 px-24 pt-2 pb-3 text-white rounded-xl font-semibold w-[350px] mr-[51px] mt-[15px] py-5 ml-[25px] hover:bg-purple-900"
            type="submit"
          >
            SIGN UP
          </button>
        </div>
        <div className="mt-12 text-white ml-[26px]">
          {" "}
          <p>-------------------Or Login with----------------------</p>{" "}
        </div>
        <div className="mt-3 flex justify-center items-center ml-[-52px]">
          <div className="m-4 border-gray-500 border-[1px] p-2 text-xs h-[40px] w-[160px] rounded-xl mr-2 text-white  flex justify-center justify-around items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#FFC107"
              />
              <path
                d="M3.653 7.3455L6.9385 9.755C7.8275 7.554 9.9805 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.659 2 5.328 4.1685 3.653 7.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M12.5 22C15.083 22 17.43 21.0115 19.2045 19.404L16.1095 16.785C15.1055 17.5455 13.8575 18 12.5 18C9.899 18 7.6905 16.3415 6.8585 14.027L3.5975 16.5395C5.2525 19.778 8.6135 22 12.5 22Z"
                fill="#4CAF50"
              />
              <path
                d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7555 15.1185 17.036 16.083 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#1976D2"
              />
            </svg>

            <button className="cursor-pointer ">
              <span className=" ">Sign in with Google</span>
            </button>
          </div>
          <div className="m-4 border-gray-500 border-[1px] p-2 text-xs h-[40px] w-[160px] rounded-xl mr-2 text-white  flex justify-center justify-around items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_2187)">
                <path
                  d="M17.9863 2.34663e-05C16.625 0.0918984 15.1681 0.901898 14.2663 1.99502C13.4769 2.9569 12.815 4.36877 13.0663 5.83502C12.8413 5.76565 12.6369 5.75815 12.3913 5.67002C11.7219 5.4319 10.9569 5.17502 10.0063 5.17502C8.11813 5.17502 6.185 6.29815 4.96625 8.17502C3.1925 10.9013 3.54875 15.6994 6.24125 19.8C6.71563 20.52 7.26875 21.3056 7.95125 21.93C8.63375 22.5544 9.45875 23.0306 10.4263 23.04C11.2531 23.0494 11.8288 22.7738 12.3463 22.545C12.8638 22.3163 13.3456 22.1138 14.2513 22.11C14.2569 22.11 14.2606 22.11 14.2663 22.11C15.1681 22.1025 15.635 22.3013 16.1413 22.53C16.6475 22.7588 17.2175 23.0475 18.0463 23.04C19.0325 23.0325 19.8706 22.4925 20.5663 21.825C21.2619 21.1575 21.8338 20.3382 22.3063 19.62C22.9831 18.5888 23.255 18.0263 23.7763 16.875C23.8306 16.755 23.8325 16.6163 23.78 16.4944C23.7294 16.3725 23.63 16.2769 23.5063 16.23C21.8 15.585 20.8269 14.0756 20.6863 12.48C20.5456 10.8844 21.2206 9.2419 22.9213 8.31002C23.0469 8.24252 23.135 8.1244 23.165 7.98565C23.1931 7.8469 23.1594 7.70065 23.0713 7.59002C21.8506 6.07315 20.1331 5.17502 18.4513 5.17502C17.3788 5.17502 16.5913 5.42815 15.9463 5.67002C15.8394 5.71127 15.7606 5.70752 15.6613 5.74502C16.3156 5.40002 16.8931 4.9219 17.3263 4.36502C18.1138 3.3544 18.7213 1.91627 18.4963 0.405023C18.4588 0.157523 18.2356 -0.0187265 17.9863 2.34663e-05ZM17.4763 1.14002C17.4444 2.1094 17.1125 3.05815 16.5613 3.76502C15.9838 4.50752 15.0125 5.02127 14.0713 5.17502C14.0881 4.24315 14.4556 3.27752 15.0163 2.59502C15.605 1.88252 16.58 1.36877 17.4763 1.14002ZM10.0063 6.13502C10.4263 6.13502 11.4013 6.33565 12.0613 6.57002C12.7213 6.8044 13.4169 7.08002 14.2363 7.08002C15.0369 7.08002 15.6706 6.80252 16.2913 6.57002C16.9119 6.33752 17.5306 6.13502 18.4513 6.13502C19.6531 6.13502 20.9525 6.7594 21.9763 7.84502C20.3375 9.0019 19.5706 10.8056 19.7263 12.555C19.8819 14.3231 20.9469 16.0013 22.6963 16.875C22.6937 16.8805 22.6912 16.8859 22.6888 16.8914C22.3142 17.7073 22.0644 18.2513 21.5113 19.095C21.0519 19.7944 20.5063 20.5594 19.9063 21.135C19.3063 21.7106 18.6706 22.0744 18.0313 22.08C17.4144 22.0856 17.0638 21.9019 16.5313 21.66C15.9988 21.4181 15.3106 21.1406 14.2513 21.15C13.1938 21.1556 12.4963 21.4219 11.9563 21.66C11.4163 21.8981 11.0619 22.0856 10.4413 22.08C9.785 22.0744 9.17563 21.7556 8.59625 21.225C8.01688 20.6944 7.49375 19.9706 7.03625 19.275C4.51625 15.435 4.31375 10.9238 5.76125 8.70002C6.8225 7.0669 9.58625 6.13502 10.0063 6.13502Z"
                  fill="white"
                />
                <path
                  d="M10.0063 6.13502C10.4263 6.13502 11.4013 6.33565 12.0613 6.57002C12.7213 6.8044 13.4169 7.08002 14.2363 7.08002C15.0369 7.08002 15.6706 6.80252 16.2913 6.57002C16.9119 6.33752 17.5306 6.13502 18.4513 6.13502C19.6531 6.13502 20.9525 6.7594 21.9763 7.84502C20.3375 9.0019 19.5706 10.8056 19.7263 12.555C19.8819 14.3231 20.9469 16.0013 22.6963 16.875L22.6888 16.8914C22.3142 17.7073 22.0644 18.2513 21.5113 19.095C21.0519 19.7944 20.5063 20.5594 19.9063 21.135C19.3063 21.7106 18.6706 22.0744 18.0313 22.08C17.4144 22.0856 17.0638 21.9019 16.5313 21.66C15.9988 21.4181 15.3106 21.1406 14.2513 21.15C13.1938 21.1556 12.4963 21.4219 11.9563 21.66C11.4163 21.8981 11.0619 22.0856 10.4413 22.08C9.785 22.0744 9.17563 21.7556 8.59625 21.225C8.01688 20.6944 7.49375 19.9706 7.03625 19.275C4.51625 15.435 4.31375 10.9238 5.76125 8.70002C6.8225 7.0669 9.58625 6.13502 10.0063 6.13502Z"
                  fill="white"
                />
                <path
                  d="M17.4763 1.14002C17.4444 2.1094 17.1125 3.05815 16.5613 3.76502C15.9838 4.50752 15.0125 5.02127 14.0713 5.17502C14.0881 4.24315 14.4556 3.27752 15.0163 2.59502C15.605 1.88252 16.58 1.36877 17.4763 1.14002Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_2187">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <button className="cursor-pointer">
              <span>Sign in with Apple</span>
            </button>
          </div>
        </div>
        <div className="mt-[-5px] text-white ml-[88px]">
          <span className="cursor-pointer hover:text-gray-800">
            Don't have an account?
          </span>
          <a href="">
            <span className="text-red-400 font-semibold ml-2 cursor-pointer  hover:text-red-600 ">
              Sign Up
            </span>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignUpPage;
