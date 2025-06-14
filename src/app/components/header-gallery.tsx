import React from "react";
import Image from "next/image";
import carBg from '../assets/car-bg.jpg'

export const HeaderGallery = () => {
    return (
        <div className={"flex justify-center"}>
            <Image src={carBg} alt={"carBg"} className={"overflow-clip min-h-[450px] w-auto object-cover"}/>
    </div>
    )
}