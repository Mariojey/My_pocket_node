import styles from './HotelList.module.css'

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function HotelList(props){
    const navigation = useNavigate();

    const [hotelList, setHotelList] = useState([]);

    if (hotelList.length === 0) {
        return(
            <>
                <div className={styles.mainContainer}>
                    <div className={styles.noHotels}>
                        <h1>Nie znaleziono żadnych hoteli</h1>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
        <div className={styles.mainContainer}>
            {hotelList.map(hotelData => {
                
            })}
        </div>
        </>
    )
}