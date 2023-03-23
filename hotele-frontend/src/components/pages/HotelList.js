import styles from './HotelList.module.css'
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HotelList(){
    

    const [hotelList, setHotelList] = useState([]);

    useEffect(() => {

        fetch(`http://127.0.0.1:8888/api/hotels`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.status == 'OK') {
                setHotelList(res.hotels[0])
            }
        })
    },[])    

    let key = 0
    return(
        
        <div className={styles.mainContainer}>
            
            {hotelList && hotelList.map((hotelData) => {
                console.log(hotelData.nazwa);
                <p key={key}>{hotelData.nazwa}</p>
                key+=1;
            })}
            
        </div>
        
    )
}