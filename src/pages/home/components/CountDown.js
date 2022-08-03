import { useEffect, useState } from "react";

const newYears = "15 Aug 2022";

const CountDown = () => {
  const [d, setD] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  useEffect(() => {
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
    function countdown() {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();
  
      const totalSeconds = (newYearsDate - currentDate) / 1000;
  
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;
  
      setD(days);
      setH(formatTime(hours));
      setM(formatTime(mins));
      setS(formatTime(seconds));
    }
    const interval = setInterval(() => {
      countdown();
    }, 1000);
    return () => clearInterval(interval);
  }, [setD,setH,setM,setS]);
  return (
    <div class="page-overlay">
    <div class="count-body">
      <h1 class="landing-text">Fadderuka Bø</h1>
      <h4 class="landing-text">15. - 21. August 2022</h4>
      <div class="countdown-container landing-text">

        <div class="countdown-el days-c">
          <p class="big-text" id="days">{d}</p>
          <span>Dager</span>
        </div>
        <div class="countdown-el hours-c">
          <p class="big-text" id="hours">{h}</p>
          <span>Timer</span>
        </div>
        <div class="countdown-el mins-c">
          <p class="big-text" id="mins">{m}</p>
          <span>Minutter</span>
        </div>
        <div class="countdown-el seconds-c">
          <p class="big-text" id="seconds">{s}</p>
          <span>Sekunder</span>
        </div>
      </div>
      <div class="program-btn">
        <a class="btn btn-light landing-text" href="#">
          Program
        </a>
      </div>
    </div>
  </div>
  );
}

export default CountDown
