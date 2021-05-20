import React from "react";
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import styles from "./style"
import TaskBoard from "../TaskBoard/TaskContainers";


class App extends React.Component{
  render(){
    //withstyle truyen cho tk App 1 props la classes
      const {classes} =this.props
    return (
        <div className="App">
            <TaskBoard></TaskBoard>
        </div>
    );
  }

}

export default withStyles(styles)(App);
