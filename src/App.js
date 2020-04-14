// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// import Drop from "./Components/Drop";
// import Drag from "./Components/Drag";
// import FormPopUp from "./Components/InfoForm";
// import CustomTabs from "./Components/CustomTabs";
// import "./App.css";
//
// export default class App extends Component {
//     state = {
//         items: {}
//     };
//
//     render() {
//         return (
//             <div className="App">
//                 <div id="header">
//                     <h1 >ePlant Custom SVG Tool</h1>
//                 </div>
//                 <div id="dropDiv" style={{height: "400px"}}>
//                     <Drop id="dropZone">
//                         <Drag id="dropDragZone"></Drag>
//                     </Drop>
//                 </div>
//                 <CustomTabs />
//                 <FormPopUp/>
//                 <div id="header" style={{height: "20px"}}>
//
//                 </div>
//             </div>
//         );
//     }
// }

import CustomTabs from "./Components/CustomTabs";
import Drop from "./Components/Drop";
import Drag from "./Components/Drag";
import FormPopUp from "./Components/InfoForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
    state = {
        items: {}
    };

    render() {
        return (
            <div className="App">
                <div id="header" style={{color: "#76b714"}}>
                    <h1> ePlant Custom SVG Tool </h1>
                </div>
                <Drop id="dropZone">
                    <Drag id="dropDragZone"></Drag>
                </Drop>
                <CustomTabs />
                <FormPopUp/>
                <div id="header" style={{height: "20px"}}></div>

            </div>



        );
    }
}