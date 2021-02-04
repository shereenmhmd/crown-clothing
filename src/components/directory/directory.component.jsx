import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export class Directory extends Component {
    constructor(){
        super();
  this.state = {
      sections:[
    { title: "Hats", imgUrl: "https://i.ibb.co/cvpntL1/hats.png", id: 1,linkUrl:"hats" },
    { title: "Jackets", imgUrl: "https://i.ibb.co/px2tCc3/jackets.png", id: 2,linkUrl:"" },
    { title: "Sneakers", imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png", id: 3,linkUrl:"" },
    { title: "Wamen", imgUrl: "https://i.ibb.co/GCCdy8t/womens.png", id: 4, size:"large",linkUrl:"" },
    { title: "Men", imgUrl: "https://i.ibb.co/R70vBrQ/men.png", id: 5 , size:"large",linkUrl:""},
  ]};
    }
  render() {
     const {sections} = this.state;
    return <div className="directory-menu">
      {
       sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))  
      }
    </div>;
  }
}
