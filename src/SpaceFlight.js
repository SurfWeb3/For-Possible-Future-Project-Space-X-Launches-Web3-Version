import axios from "axios";
import React, { useState, useEffect } from "react"
import "./SpaceFlight.css"


function SpaceFlight() {
  const [flights, setFlights] = useState([])

//Space X launches: https://api.spacexdata.com/v2/launches
    useEffect(()=> {
    //Make a GET request to the Space X Flights API
    axios.get("https://api.spacexdata.com/v2/launches")
    //res = response, promise done
    .then((res) => {
    //If the promise is done, we get the data with res 
    //We use setFLights to make/choose the data
    //WHen we start the array of flights with useState is empty, 
    //we got the lfights from the api, and use setFlights to use that data as a value
    //we use red.data to get the data that is returned, 
    //useState hook is used to set setFlights
    //swe put the data into the array with useState, using setFlights
    //useEffect does the action every time the page is refreshed
      setFlights(res.data)
    })
    //err = error
    .catch((err) => {
      //handle (show) errors, if any
        console.log("Error while fetching the SpaceX API", err)
    })
  }, [])





  return (
//This code iterates through the array inthe top section, and shows that data to the user as a list
  <ul className="flights-list">

    {flights.map((flight) =>(
      <li key={flight.flight_number}>
        <div className="flight-info">
          <img src={flight.links.mission_patch_small}
          alt={flight.mission_name}
          />
        </div>

        <div className="flight-data">
        <h2>{flight.mission_name}</h2>
        <p>Flight Number: {flight.flight_number}</p>
        <p>Launch Date: {flight.flight_number}</p>
        <p>Flight Details: {flight.details}</p>
        <p>Launch Year: {flight.launch_year}</p>
       
        <a href={flight.links.article_link}>Read more about the launch!</a>
        </div>
      </li>
    ))}
  </ul>

  );
}

export default SpaceFlight;
