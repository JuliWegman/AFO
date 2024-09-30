import React from "react"
const Send = ({ size = 24, color = "#fafafa"}) => {
    return (
		<svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.5481 2.71887L16.0583 21.315H16.0333L10.7932 13.4737L2.95187 8.2335V8.20447L21.5154 2.68494L21.5481 2.71887Z" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
		<path d="M11.0393 13.2855L15.4816 8.84314" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
		</svg> 
		) 
};
export default Send