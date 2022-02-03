import { useRouter } from "next/router";
import React from "react";

const Collection = () => {
    const router = useRouter()
    console.log(router.query) // I dont know why this is not returning the collection address fthat i retrieved from thirdweb

    
    return <div></div>
}



export default Collection