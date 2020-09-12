import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css";
import "./button.css";
import imageUrl from "./webpack-logo.jpg";
import makeImage from "./image";

// console.log(imageUrl); converts to base65

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
const image = makeImage(imageUrl);
document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
