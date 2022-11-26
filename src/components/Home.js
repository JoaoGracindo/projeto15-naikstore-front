import React, { useState } from 'react';
import Navbar from "./navbar/Navbar"

export const Home = ()=>{
    const [online, setOnline] = useState(false);
    return(
        <Navbar online={online} setOnline={setOnline} />
    )
}