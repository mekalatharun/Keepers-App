import React from "react";
function Footer(){
    const n=new Date();
    const y=n.getFullYear();
    return(
    <footer>
    <p>Copyright @ {y}</p>
    </footer>
    );
}
export default Footer;