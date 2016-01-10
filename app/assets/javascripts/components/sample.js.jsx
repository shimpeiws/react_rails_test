var Sample = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  },

  handleClick: function() {
    alert(this.props.message);
  },

  render: function() {
    return (
      <div onClick={this.handleClick}>click me!</div>
    );
  }
});
