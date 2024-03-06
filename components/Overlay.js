import React from 'react';


const Overlay = ({ show }) => {

    return(
        <>
            { show ? (
                    <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50"/>
                )
                :
                (
                    <div className="hidden"/>
                )
            }
        </>
    )
}
export default Overlay;
