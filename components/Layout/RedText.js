import React from "react";

function RedText(props) {
    return <p style={{ color: "red" }}>{props.children}</p>;
}

export default RedText;

// RedText…
// • uses a <p> its base element
// • styles it with an in-line style
// • passes the children prop into the <p> elements content