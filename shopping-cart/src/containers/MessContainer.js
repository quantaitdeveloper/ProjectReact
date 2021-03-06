import React, { Component } from 'react';
import Message from '../components/Message';
import {connect} from "react-redux";

class MessContainer extends Component {
    render() {
        return (
            <Message mess={this.props.mess}></Message>         
        );
    }
}

const mapStateToProps = state =>{
    return {
        mess : state.mess
    }
}

export default connect(mapStateToProps,null)(MessContainer);
