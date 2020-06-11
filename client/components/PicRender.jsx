import React, { Component } from 'react';

class PicRender extends Component {

    render() {
        // put render logic here
        return (
          <div>
            <img className="feedItem" src={this.props.pic.url}></img>
          </div>
        );
      }
}


export default PicRender;