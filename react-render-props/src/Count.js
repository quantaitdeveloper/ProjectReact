import React, { Component } from 'react';
import Menu from "./menu";
class Count extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            count :0, 
            component : <Menu></Menu>
        }
    }
    

    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.setState({
                count : this.state.count +1 
            });
        } , 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.component)}
            </div>
        );
    }
}

export default Count;
