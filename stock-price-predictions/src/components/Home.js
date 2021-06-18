import React from 'react'
import OurServices from "./OurServices";
import Welcome from "./Welcome";
import Team from "./Team";
import Header from "./Header";
import Contact from "./Contact";

export default function Home() {
    return (
        <div>
            <Header />
            <Welcome />
            <OurServices />   
            <Team />
            <Contact />
        </div>
    )
}
