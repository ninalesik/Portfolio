import React from "react";
import './paragraph.css'

export const Paragraph = ({text, align}) => {
const alignText = align === "center" ? "paragraphCenter" : "";
return <p className={`paragraph ${alignText}`}>{text}</p>}