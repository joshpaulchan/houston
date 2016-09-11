import React from 'react';

module.exports = React.createClass({
  
  render: function() {
    // console.log("[container] component upon render", this);
    // console.log("state upon render", this.state);
    // console.log("dispatch", this.props.dispatch);
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
});
