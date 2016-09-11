import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions';

const CardHeader = React.createClass({
  render: function() {
    return (
      <div className="card-header">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
});

const CardFooterButtons = React.createClass({
  render: function() {
    return (
      <div className="card-footer">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
});

const Card = React.createClass({  
  render: function() {
    return (
      <div className="card">
        {(this.props.title) ? <CardHeader title={this.props.title} /> : null}
				<div className="card-body">
	        {this.props.children}
				</div>
        {(this.props.buttons) ? <CardFooterButtons buttons={this.props.buttons} /> : null}
      </div>
    );
  }
});

module.exports = Card;
