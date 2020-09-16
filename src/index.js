import nav from "./nav";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";
// import  {footer}  from "./footer";
const loadFooter=()=> import("./footer.js")

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

button.addEventListener("click",e=>{
  loadFooter().then((m)=>{
    document.body.appendChild(m.footer);
  })
})

document.body.appendChild(button);
document.body.appendChild(image);
// document.body.appendChild(footer);
