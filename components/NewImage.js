// import React from "react"
import { urlFor } from '../sanity'

const NewImage = ({image}) => {

    return (
        <div>
            <img src={urlFor(image).auto("format")} alt=""/>
        </div>

    )
}


export default NewImage