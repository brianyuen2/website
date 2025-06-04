import React from "react";
import Image from "next/image";
import carBg from '../assets/car-bg.jpg'

export const HeaderGallery = () => {
    return (
        <div className={"pb-10"}>
            <Image src={carBg} alt={"carBg"}/>
    </div>
    )
}