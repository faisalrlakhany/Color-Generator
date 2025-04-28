
import { useRef, useState } from 'react';
import './Generator.css';

const Generator = () => {

    const [bgcolor, setBgColor] = useState('black')
    const [border, setBorder] = useState('red')
    const [stopborder, setStopBorder] = useState('red')
    const [stoptextColor, setStopTextColor] = useState('black')
    const [textColor, setTextColor] = useState('black')
    const [angle, setAngle] = useState(0)
    const [stopangle , setStopAngle] = useState(0)
    const intervalId = useRef(null)


    const changeColor = () => {

        if(intervalId.current) return;
                
          intervalId.current =  setInterval(() => {

                const red = generateBgColor();
                const green = generateBgColor();
                const blue = generateBgColor();
    
                const mixColor = `rgb(${red},${green},${blue})`
                // console.log('Bg-Color  ===> , mixColor);
    
    
                const borderRed = generateBorderColor();
                const borderBlue = generateBorderColor();
                const borderGreen = generateBorderColor();
    
                const mixBorderColor = `rgb(${borderRed} , ${borderGreen} , ${borderBlue})`
                // console.log('Border-Color  ===> ', mixBorderColor);
    
    
                const textRed = generateTextColor();
                const textGreen = generateTextColor();
                const textBlue = generateTextColor();
    
                const mixTextColor = `rgb(${textRed} , ${textGreen} , ${textBlue})`
                // console.log('Text-Color  ===> ', mixTextColor);
    
    
    
                setBgColor(mixColor);
                setBorder(mixBorderColor)
                setTextColor(mixTextColor)
                setAngle(prev => prev + 360)
    
            }, 1500);
            
    }


    const stopColor = ()=>{
    
        if (intervalId.current) {
         
            
            
        clearInterval(intervalId.current)
        intervalId.current = null

        
        
        setStopAngle(prev => prev + 360)

        const stopTextRed = generateTextColor()
        const stopTextGreen = generateTextColor()
        const stopTextBlue = generateTextColor()
        
        const stopMixTextColor = `rgb(${stopTextRed} , ${stopTextGreen} , ${stopTextBlue})`

        setStopTextColor(stopMixTextColor)


        const stopBorderRed = generateTextColor()
        const stopBorderGreen = generateTextColor()
        const stopBorderBlue = generateTextColor()
        
        const stopMixBorderColor = `rgb(${stopBorderRed} , ${stopBorderGreen} , ${stopBorderBlue})`

        setStopBorder(stopMixBorderColor)

        
        return


        }        
    }


    const generateBgColor = () => {

        return Math.floor(Math.random() * 257);

    }

    const generateBorderColor = () => {

        return Math.floor(Math.random() * 254);

    }

    const generateTextColor = () => {

        return Math.floor(Math.random() * 250);

    }



    return (

        <>
        <div className="box">

            <div className="btn" style={{
                backgroundColor: `${bgcolor}`
            }} >

                <div className="start-btn" style={{
                    transform: `rotate(${angle}deg)`,
                    transition: "1.5s ease-in-out"
                }} >
                    <button className="btn1" onClick={changeColor} style={{
                        border: `5px solid ${border}`,
                        color: textColor
                    }}>Start Color Generator</button>
                </div>

                <div className="stop-btn" style={{
                    transform : `rotate(${stopangle}deg)`,
                    transition : "0.5s ease-in-out"
                }} >
                <button className="btn1" onClick={stopColor} style={{
                        border: `5px solid ${stopborder}`,
                        color: stoptextColor
                    }}>Stop Color Generator</button>
                </div>

            </div>

        </div>

        </>

    )






}


export default Generator