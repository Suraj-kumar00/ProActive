import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";

function MyProductivity() {
  return (
    <div className="container flex  h-[100vh] bg-[url('./Images/Background_Image.png')] min-w-full ">
      <div className="hide-scrollbar flex justify-start mx-3 md:container md:mr-20 ml-auto rounded-xl p-5 bg-violet-100 min-h-[80vh] max-h-[80vh] md:w-[22%] overflow-hidden overflow-y-scroll self-center">
    <h1 className=" myproductivity text-violet-800 ml-[8vh] font-semibold text-xl">My Productivity</h1>
    <div className="task-completed">

    </div>
    <div className="time-duration">

    </div>
    <div className="pi-chart">

    </div>
    

      </div>
    </div>
  );
}
export default MyProductivity;
