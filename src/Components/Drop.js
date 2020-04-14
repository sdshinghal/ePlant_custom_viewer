import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

export default class Drop extends Component {
  drop = e => {
    console.log("first: ");
    console.log(e);
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    var dropDrag = document.getElementById("dropDragZone");
    let k = document.getElementById(data);
    console.log(document.getElementById(data));
    console.log(document.getElementById(data));
    console.log("k: ");
    console.log(k);
    console.log("parent: ");
    console.log(k.parentElement);


    var x = e.clientX; //x position within the element.
    var y = e.clientY; //y position within the element.
    if (k.parentElement.id !== "dropDragZone") {
      var nodeCopy = k.cloneNode(true);
      console.log(nodeCopy instanceof HTMLElement);
      // nodeCopy.setAttributes = ("id", uuid());
      nodeCopy.id = uuid(); /* We cannot use the same ID */
      // e.target.appendChild(nodeCopy);

      console.log(nodeCopy);
      nodeCopy.children[0].style.left = x + "px";
      nodeCopy.children[0].style.top = y + "px";

      // nodeCopy.style.left = x + "px";
      // nodeCopy.style.top = y + "px";
      dropDrag.appendChild(nodeCopy);
    } else {
      let divBoundary = window.getComputedStyle(
        document.getElementById("dropZone"),
        null
      );
      let divBoundaryHeight = parseInt(
        divBoundary.getPropertyValue("height"),
        10
      );
      let divBoundaryWidth = parseInt(
        divBoundary.getPropertyValue("width"),
        10
      );

      if (divBoundaryWidth >= x && x >= 10) k.children[0].style.left = x + "px";

      if (divBoundaryHeight >= y && x >= 10) k.children[0].style.top = y + "px";
    }

    // console.log(x, y);
  };

  allowDrop = e => {
    e.preventDefault();
  };

  onClick = e => {
    console.log("I am done");
  };

  render() {
    return (
      <div
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.allowDrop}
        style={this.props.style}
        onClick={this.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

Drop.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
