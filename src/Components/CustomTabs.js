// import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Drag from "./Drag";
import Drop from "./Drop";
import uuid from "uuid/v4";
import ReactDOM from "react-dom";

import {Media} from 'reactstrap'

// Seed SVGs
import GerminatingSeed from '../SVGFiles/GerminatingSeed.svg';
import SeedStage1_4 from '../SVGFiles/SeedStage1-4.svg';
import SeedStage5_7 from '../SVGFiles/SeedStage5-7.svg';
import SeedStage8 from '../SVGFiles/SeedStage8.svg';
import SiliqueStage1_5 from '../SVGFiles/SiliqueStage1-5.svg';
import SiliqueStage6_10 from '../SVGFiles/SiliqueStage6-10.svg';

// Flower SVGs
import Flower from '../SVGFiles/Flower.svg';
import FlowerParts from '../SVGFiles/FlowerParts.svg';
import Stage1Flowers from '../SVGFiles/Stage1Flowers.svg';
import Stage12Buds from '../SVGFiles/Stage12Bud.svg'

// Seedling SVGs
import tendayOldSeedling from '../SVGFiles/10dayOldSeedling.svg';
import fifteendayOldSeedling from '../SVGFiles/15dayOldSeedling.svg';
import etiolatedSeedling from '../SVGFiles/etiolatedSeedling.svg';
import RosettePlusRoot from '../SVGFiles/rosettePlusRoot.svg';
import youngSeedling from '../SVGFiles/youngSeedling.svg';

//Other SVGs
import Internode from '../SVGFiles/Internode.svg';
import Pollen from '../SVGFiles/Pollen.svg';
import RootTip from '../SVGFiles/RootTip.svg';
import StigmaAndOvaries from '../SVGFiles/StigmaAndOvaries.svg';
import Stamen from '../SVGFiles/Stamen.svg';
import Leaf from '../SVGFiles/leaf.svg';
import LeafParts from '../SVGFiles/LeafParts.svg';
import SenescentLeaf from '../SVGFiles/SenescentLeaf.svg';




function TabContainer(props) {
  // console.log(props);
  // var node = ReactDOM.findDOMNode(props);
  // console.log(node);
  // return <Typography id="data">{props.children}</Typography>;
  return <div id="data">{props.children}</div>
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default class CustomTabs extends Component {
  state = {
    value: 0,
    list: []
  };

    list1 = {
        one: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="yellow"
                />
            </svg>
        ),
        two: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="red"
                />
            </svg>
        )
    };

    list2 = {
        one: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="yellow"
                />
            </svg>
        ),
        two: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="red"
                />
            </svg>
        )
    };

    list3 = {
        one: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="yellow"
                />
            </svg>
        ),
        two: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="red"
                />
            </svg>
        )
    };

    list4 = {
        one: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="yellow"
                />
            </svg>
        ),
        two: (
            <svg width="100" height="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                    fill="red"
                />
            </svg>
        )
    };

  // list1 = {
  //   one: (
  //         <Media>
  //           <Media object id="data" src={GerminatingSeed} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //
  //   ),
  //   two: (
  //       <Media>
  //         <Media object id="data" src={SeedStage1_4} style={{width:"100px", height:"100px"}}/>
  //       </Media>
  //   ),
  //   three: (
  //       <Media>
  //         <Media object id="data" src={SeedStage5_7} style={{width:"100px", height:"100px"}}/>
  //       </Media>
  //   ),
  //   four: (
  //       <Media>
  //         <Media object id="data" src={SeedStage8} style={{width:"100px", height:"100px"}}/>
  //       </Media>
  //   ),
  //   five: (
  //       <Media>
  //         <Media object id="data" src={SiliqueStage1_5} style={{width:"100px", height:"100px"}}/>
  //       </Media>
  //   ),
  //   six: (
  //       <Media>
  //         <Media object id="data" src={SiliqueStage6_10} style={{width:"100px", height:"100px"}}/>
  //       </Media>
  //   )
  // };

  // list2 = {
  //     one: (
  //         <Media>
  //{/*            <Media object id="data" src={Flower} style={{width:"100px", height:"100px"}}/>*/}
  //{/*        </Media>*/}
  //{/*    ),*/}
  //{/*    two: (*/}
  //{/*        <Media>*/}
  //{/*            <Media object id="data" src={FlowerParts} style={{width:"100px", height:"100px"}}/>*/}
  //         </Media>
  //     ),
  //     three: (
  //         <Media>
  //             <Media object id="data" src={Stage1Flowers} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     four: (
  //         <Media>
  //             <Media object id="data" src={Stage12Buds} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     )
  // };

  // list3 = {
  //     one: (
  //         <Media>
  //             <Media object id="data" src={tendayOldSeedling} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //
  //     ),
  //     two: (
  //         <Media>
  //             <Media object id="data" src={fifteendayOldSeedling} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     three: (
  //         <Media>
  //             <Media object id="data" src={etiolatedSeedling} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     four: (
  //         <Media>
  //             <Media object id="data" src={RosettePlusRoot} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     five: (
  //         <Media>
  //             <Media object id="data" src={youngSeedling} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     )
  // };

  // list4 = {
  //     one: (
  //         <Media>
  //             <Media object id="data" src={Internode} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //
  //     ),
  //     two: (
  //         <Media>
  //             <Media object id="data" src={Pollen} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     three: (
  //         <Media>
  //             <Media object id="data" src={RootTip} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     four: (
  //         <Media>
  //             <Media object id="data" src={StigmaAndOvaries} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     five: (
  //         <Media>
  //             <Media object id="data" src={Stamen} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     six: (
  //         <Media>
  //             <Media object id="data" src={Leaf} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     seven: (
  //         <Media>
  //             <Media object id="data" src={LeafParts} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     ),
  //     eight: (
  //         <Media>
  //             <Media object id="data" src={SenescentLeaf} style={{width:"100px", height:"100px"}}/>
  //         </Media>
  //     )
  // };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          aria-label="tabs"
        >
            <Tab label="Seeds" />
            <Tab label="Flowers" />
            <Tab label="Seedlings" />
            <Tab label="Other" />
        </Tabs>

        {value === 0 && (
          <React.Fragment>
            <Drag id={uuid()}>
              <TabContainer>{this.list1.one}</TabContainer>
            </Drag>
            <Drag id={uuid()}>
              <TabContainer>{this.list1.two}</TabContainer>
            </Drag>
              <Drag id={uuid()}>
                  <TabContainer>{this.list1.three}</TabContainer>
              </Drag>
              <Drag id={uuid()}>
                  <TabContainer>{this.list1.four}</TabContainer>
              </Drag>
              <Drag id={uuid()}>
                  <TabContainer>{this.list1.five}</TabContainer>
              </Drag>
              <Drag id={uuid()}>
                  <TabContainer>{this.list1.six}</TabContainer>
              </Drag>
          </React.Fragment>
        )}
        {value === 1 && (
            <React.Fragment>
                <Drag id={uuid()}>
                    <TabContainer>{this.list2.one}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list2.two}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list2.three}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list2.four}</TabContainer>
                </Drag>
            </React.Fragment>
        )}
        {value === 2 && (
            <React.Fragment>
                <Drag id={uuid()}>
                    <TabContainer>{this.list3.one}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list3.two}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list3.three}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list3.four}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list3.five}</TabContainer>
                </Drag>
            </React.Fragment>

        )}
        {value === 3 && (
            <React.Fragment>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.one}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.two}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.three}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.four}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.five}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.six}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.seven}</TabContainer>
                </Drag>
                <Drag id={uuid()}>
                    <TabContainer>{this.list4.eight}</TabContainer>
                </Drag>

            </React.Fragment>

        )}
      </Paper>
    );
  }
}
