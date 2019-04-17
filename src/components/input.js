import React from 'react';
import { connect } from "react-redux";

class Input extends React.Component {
   render() {
      return (
         <input
            name="value"
            value={this.props.value}
            onChange={(event) => this.props.onChange(event)}>
         </input>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      value: state.value
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: (event) => dispatch({ type: "changeValue", element: event.target })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);