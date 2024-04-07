import { useState, useEffect } from "react";

function PomodoroTimer() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [minutes, setMinutes] = useState(workMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            // Optionally, you can add a sound notification here for end of timer
            setIsWorkTime(!isWorkTime);
            if (isWorkTime) {
              setMinutes(breakMinutes);
            } else {
              setMinutes(workMinutes);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [
    isActive,
    isPaused,
    minutes,
    seconds,
    isWorkTime,
    workMinutes,
    breakMinutes,
  ]);

  const toggleTimer = () => {
    setIsActive(!isActive);
    setIsPaused(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setMinutes(workMinutes);
    setSeconds(0);
    setIsWorkTime(true);
  };

  // Remove the unused pauseTimer function
  // const pauseTimer = () => {
  //   setIsPaused(true);
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold mb-4">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={toggleTimer}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          {isActive ? (isPaused ? "Resume" : "Pause") : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
      <div className="mt-4">
        <label htmlFor="workMinutes">Work Minutes:</label>
        <input
          id="workMinutes"
          type="number"
          value={workMinutes}
          onChange={(e) => setWorkMinutes(parseInt(e.target.value))}
          className="ml-2 p-1 border border-gray-300 rounded"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="breakMinutes">Break Minutes:</label>
        <input
          id="breakMinutes"
          type="number"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(parseInt(e.target.value))}
          className="ml-2 p-1 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
}

export default PomodoroTimer;
