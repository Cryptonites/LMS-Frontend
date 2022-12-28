import React from "react";
import { useState, useEffect } from "react";
import "../css/countdown.css";
import axios from "axios";

const Countdown = () => {
  const [countdown, setCountdown] = useState([]);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const month = countdown.month;
  const day = countdown.day;
  const year = countdown.year;
  const deadline = month + "," + day + "," + year;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    axios
      .get("http://localhost:8081/api/v1/countdown/get-countdown/1")
      .then((response) => {
        console.log(response.data.data);
        setCountdown(response.data.data);
      });
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-section-1">
      <div className="div-countdown">
        <div className="div-title-btn">
          <span className="countdown-title">{countdown.eventName}</span>     
          <div className="plan-btn">Plan to study</div>
        </div>

        <div className="countdown-section-2 ">  
          <div className="countdown-div">
            <div className="div-days">
              <div className="days-display">
                {days < 10 ? "0" + days : days}
              </div>
              <div className="days-title">Days</div>  
            </div>

            <div className="div-hours">
              <div className="hours-display">
                {hours < 10 ? "0" + hours : hours}
              </div>
              <div className="hours-title">Hours</div>       
            </div>
            <div className="div-minutes">
              <div className="minutes-display">
                {minutes < 10 ? "0" + minutes : minutes}
              </div>
              <div className="minutes-title">Minutes</div>
            </div>
          </div>
          <div className="div-timer-icon">
            <img
              className="timer-icon"
              src={require("../images/countdown-img-transformed.webp")}
              alt="todo-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
