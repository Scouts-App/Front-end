import React from "react";

interface IPros {
    title: React.ReactNode,
    data: {
        img: string,
        name: string,
        percent: number
    }
}
const ListToken = () =>{
    return <div className="flex items-center bg-neutral-50 border-b-2 border-[#323232]">
       <div></div>
    </div>
}

export default ListToken;