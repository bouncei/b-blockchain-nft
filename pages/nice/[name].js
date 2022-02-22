import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
  }


const Name = ({ url: { query: { name } } }) => {
    return (
        <div>{name}</div>
    )
}


export default Name