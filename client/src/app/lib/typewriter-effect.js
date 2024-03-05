import React from "react"; 
import Typewriter from 'typewriter-effect';
  
export default function TypingEffect() {
    return ( 
        <div>
            <Typewriter 
                onInit={(typewriter) => { 
                typewriter.typeString('Hello World!')
                    .pauseFor(2500)
                    .start(); 
                }} 
            />
        </div> 
    ); 
}