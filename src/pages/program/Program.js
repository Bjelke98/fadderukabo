import React from 'react'


const eventlist = [
  {
    day: "14. August",
    event: [
      { title: "Åpen dag",
        title2: "Se din campus",
        description: "Legg inn beskrivelse.",
        time: "12:00 - 15:00",
        position: "Gullbringvegen, Bø 3800",
        buttonText: "Les mer",
        buttonLink: "#",
        image: "images/event/usn.png"
      },
      { title: "Åpen dag",
        title2: "Se mer",
        description: "Legg inn beskrivelse.",
        time: "12:00 - 15:00",
        position: "Gullbringvegen, Bø 3800",
        buttonText: "Les mer",
        buttonLink: "#",
        image: "images/event/usn.png"
      },
      { title: "Åpen dag",
        title2: "Se din campus",
        description: "Legg inn beskrivelse.",
        time: "12:00 - 15:00",
        position: "Gullbringvegen, Bø 3800",
        buttonText: "Les mer",
        buttonLink: "#",
        image: "images/event/usn.png"
      }
      ]
    },
    {
      day: "15. August",
      event: [
      { title: "Åpen dag",
        title2: "Se din campus",
        description: "Legg inn beskrivelse.",
        time: "12:00 - 15:00",
        position: "Gullbringvegen, Bø 3800",
        buttonText: "Les mer",
        buttonLink: "#",
        image: "images/event/usn.png"
      },
      { title: "Åpen dag",
        title2: "Se mer",
        description: "Legg inn beskrivelse.",
        time: "12:00 - 15:00",
        position: "Gullbringvegen, Bø 3800",
        buttonText: "Les mer",
        buttonLink: "#",
        image: "images/event/usn.png"
      },
      { title: "Åpen dag",
        title2: "Se din campus",
        description: "Legg inn beskrivelse.",
        time: "12:00 - 15:00",
        position: "Gullbringvegen, Bø 3800",
        buttonText: "Les mer",
        buttonLink: "#",
        image: "images/event/usn.png"
      }
      ]
    },
];


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
    description,time,position,
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
          <hr class="border border-primary border-1 opacity-75 event-line mt-2 align-items-center rounded"/>
          <p class="card-text program-text">
            {description}
          </p>

        </div>
        <div class="card-footer border-white bg-white ">
          <div class="card-time text-muted m-0"><i class="fa-regular fa-calendar fa-xs me-2"></i><span
              class="small">{time}</span></div>
          <i class="fa-solid fa-location-dot fa-xs me-2 text-muted"></i><span
            class="small text-muted">{position}</span>
          <hr class="m-0"/>
          <div class="my-auto mt-2 text-center">
            <a class="btn btn-sm btn-dark opacity-80 program-text rounded-pill px-4 text-uppercase m-1 event-btn">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Program = () => {
  return (
  <div class="wrap">
    {eventlist.map((wd, index)=>(
      <Day key={index} day={wd.day} event={wd.event}/>
    ))}
  </div>
  );
}

export default Program
