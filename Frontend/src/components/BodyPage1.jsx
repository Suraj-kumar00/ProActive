// import React from 'react'

// const BodyPage1 = () => {
//   return (
//     <div className="font-serif flex justify-center items-center h-screen bg-cover  bg-[url('./Images/Background_Image.png')]  ">
//       <div>
//         <h1 className="text-white font-bold flex self-center text-5xl ">Welcome to ProActive !</h1>
//         <h2 className="text-white text-md ml-[20px] mt-[6px]"> Say goodbye to procrastination,Let's make progress not excuses.</h2>

//      </div>
//      <div>
//      <div>
//      <div className='text-white font-semibold border-2 rounded-lg border-x-slate-700 '>
//         <button className='hover:bg-purple-950 h-34 w-6'>LOGIN</button>
//      </div>
//      <span className='text-white font-semibold border-2 rounded-lg border-x-slate-700  px-2 py-2'>
//         <button>SIGNUP</button>
//      </span>
//      </div>
//      </div>
     
// <div className='flex  justify-between '>
// <div className="bg-purple-900 p-4 rounded shadow text-white">
//   <h2 className="text-lg font-semibold mb-4">What ProActive provide you</h2>
//   <ul className="list-disc pl-4">
//     <li>Proactive:This app gamifies productivity by encouraging users to stay focused for set periods of time.</li>
//     <li>Stay Focused: A browser for google chrome that allows users to restrict the amount of time they spend </li>
//     <li>Freedom: Similar to stay focused,freedom allows you to block distracting websites and apps across all your devices.</li>
//     <li>Trello:While not specifically a procrastination app, Trello is a popular project management tool that can help organise tasks and deadlines.</li>
//   </ul>
// </div>
// <div className=""></div>
// </div>
// <div>

// </div>
//      </div>
    
     
//   )
// }

// export default BodyPage1


import React from 'react';

const BodyPage1  = () => {
  return (
    <div className=" font-serif min-h-screen flex flex-col justify-between  h-screen bg-cover  bg-[url('./Images/Background_Image.png')]">
      <div className=" text-white p-8 mx-[84px]">
        <h1 className="text-4xl font-bold mb-4 mt-24 ml-[56vh]">Welcome to ProActive !</h1>
        <p className="text-lg ml-[52vh]">Say goodbye to procrastination,Let's make progress not excuses.</p>
        <div className="mt-8 ml-[70vh]">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-4 rounded">
            Login
          </button>
          <button className=  "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ">
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-purple-900 p-8 border-2 rounded-lg text-white ml-[40vh] w-[121vh] h-[35vh]">
        <h2 className="text-xl font-bold mb-4">What ProActive provide you</h2>
        <ul className="list-disc pl-4">
          <li>Proactive:This app gamifies productivity by encouraging users to stay focused for set periods of time.</li>
          <li>Stay Focused: A browser for google chrome that allows users to restrict the amount of time they spend </li>
          <li>Freedom: Similar to stay focused,freedom allows you to block distracting websites and apps across all your devices.</li>
          <li>Trello:While not specifically a procrastination app, Trello is a popular project management tool that can help organise tasks and deadlines. </li>
        </ul>
      </div>
      <footer className="bg-purple-800 text-white p-4">
        <div><h1 className='text-white font-bold ml-[94vh] '>ProActive</h1></div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
          <a href="#" className="hover:text-gray-400">Join Our Community</a>
        </div>
      </footer>
    </div>
  );
};

export default BodyPage1 ;
