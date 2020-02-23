import React from "react";
import { render } from 'react-dom'

import { BrowserRouter } from "react-router-dom"

// import MostStared from "./components/ajax/moststared";
// ReactDOM.render(<App/>, document.getElementById("root"))
import App from "./components/router/components/app"

render(
    (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
     document.getElementById("root")
)