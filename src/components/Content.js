import React, {useEffect, useState} from "react";
import axios from "axios";
import DateCard from "./DateCard"

export default function Content() {
    //get today's date and set it as a variable called today
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //declare and set state values
    const [apodData, setApodData] = useState({});
    const [searchDate, setSearchDate] = useState(today);


    useEffect(() => {
        //add "&date=2012-03-14" to the end of the api endpoint to choose a different date
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=9eIL6bkeb2lSZjeGEL1av3YnXAyrvNpUethvcA7j&date=${searchDate}`)
        .then(response => {
            // returned object keys: date, explanation, hdurl, media_type, service_version, title, url
            setApodData(response.data);
        })
        .catch(error => {
            console.log("There was no data received.", error);
        })
    }, [])

    return (
        <div className="cardsContainer">
            <DateCard date={apodData.date} explanation={apodData.explanation} hdurl={apodData.hdurl}title={apodData.title} url={apodData.url}/>
        </div>
    );
}