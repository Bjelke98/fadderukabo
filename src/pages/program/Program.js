import React from 'react'
import useEnglish from '../../hooks/useEnglish';
import Translate from '../../Translate';
import { Link} from 'react-router-dom';

const Day = ({day, event}) => {
  
  return (
    <div class="py-2 bg-beige">
    <div class="container">
      <div class="row justify-content-center">
        <div class="row">
          <h1 class="landing-text">{day}</h1>
        </div>

        <div class="row justify-content-start">
          
          {event.map((de, index)=>(
            <Event key={index} event={de}/>
          ))}

        </div>
      </div>


    </div>


  </div>
  );
}

const Event = ({event}) => {
  const {title, title2,
    description,time,position,color,
    buttonText = "Les mer",
    buttonLink,image} = event;
  return (
    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 pt-2 pb-2">
      <div class="card event rounded border border-light shadow-sm hvr-float h-100">
        <div class="bg-image hover-overlay">
          <img src={image} class="img-fluid rounded-top"/>
        </div>
        <div class="card-body pb-0">

          <h5 class="card-title text-center text-uppercase landing-text">
            {title}<br/>{title2}
          </h5>
          <hr class={"border border-1 opacity-75 event-line mt-2 align-items-center rounded border-"+color}/>
          <p class="card-text program-text">
            {description}
          </p>

        </div>
        <div class="fixed-bottom mx-2 my-2 border-white bg-white ">
          <div class="card-time text-muted m-0"><i class="fa-regular fa-calendar fa-xs me-2"></i><span
              class="small">{time}</span></div>
          <i class="fa-solid fa-location-dot fa-xs me-2 text-muted"></i><span
            class="small text-muted">{position}</span>
          <hr class="m-0"/>
          <div class="my-auto mt-2 text-center">
            <a href={buttonLink} class="btn btn-sm btn-dark opacity-80 program-text rounded-pill px-4 text-uppercase m-1 event-btn">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Program = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  const eventlist = [
    {
      day: "14. August",
      event: [
        t.program.day1.event1,
        t.program.day1.event2,
        t.program.day1.event3,
        t.program.day1.event4
      ]
      },
      {
        day: "15. August",
        event: [
          t.program.day2.event1,
          t.program.day2.event2,
          t.program.day2.event3,
          t.program.day2.event4
        ]
      },
      {
        day: "16. August",
        event: [
          t.program.day3.event1,
          t.program.day3.event2,
          t.program.day3.event3,
          t.program.day3.event4
        ]
      },
      {
        day: "17. August",
        event: [
          t.program.day4.event1,
          t.program.day4.event2,
          t.program.day4.event3,
          t.program.day4.event4
        ]
      },
      {
        day: "18. August",
        event: [
          t.program.day5.event1,
          t.program.day5.event2,
          t.program.day5.event3,
          t.program.day5.event4
        ]
      },
      {
        day: "19. August",
        event: [
          t.program.day6.event1,
          t.program.day6.event2,
          t.program.day6.event3
        ]
      },
      {
        day: "20. August",
        event: [
          t.program.day7.event1,
          t.program.day7.event2,
          t.program.day7.event3
        ]
      },
      {
        day: "21. August",
        event: [
          t.program.day8.event1,
          t.program.day8.event2
        ]
      },
      
  ];

  return (
  <div class="wrap">
    {eventlist.map((wd, index)=>(
      <Day key={index} day={wd.day} event={wd.event}/>
    ))}
  </div>
  );
}

export default Program
