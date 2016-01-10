var Sample = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  },

  handleClick: function() {
    alert(this.props.message);
  },

  showProps: function() {
    console.log(this.props.message);
  },

  render: function() {
    return (
      <div className="wrap">
        <div onClick={this.handleClick}>click me!</div>
        <div onClick={this.showProps}>show props!</div>
      </div>
    );
  }
});
