import React from 'react';
import { connect } from 'react-redux';

class Para extends React.Component {
   render() {
      return (
         <p>{this.props.value}</p>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      value: state.value
   }
}

export default connect(mapStateToProps)(Para);