import React, {Component} from 'react';

export default class LineShareBtn extends Component{
  render(){
    let text = this.props.text;
    const url = this.props.url;
    const size = this.props.size;

    let iconName = "https://s3-ap-northeast-1.amazonaws.com/katy7/line-logo.png";
    let iconClassName = "share-icon"

    if(size == "large"){
      iconName = "https://s3-ap-northeast-1.amazonaws.com/katy7/share-a.png"
      iconClassName = ""
    }

    if(text){
      text = encodeURI(this.props.text) + "%0D%0A";
    }
    
    return(
      <a className="share-line-btn" href={"https://line.me/R/msg/text/"+text+url} target="blank">
        <img src={iconName} className={iconClassName}/>
      </a> 
    );
  }
}