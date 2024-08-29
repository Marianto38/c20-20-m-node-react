import React from "react"

import './BloqueInputLabel.css'

const BloqueInputLabel = ({ label, type, fontSize }) => {
    return (
        <div className='inputLabel'>
            <label  style={{ fontSize: fontSize }}>{label}</label>
            <input type={type}/>
        </div>
    )
}

export default BloqueInputLabel