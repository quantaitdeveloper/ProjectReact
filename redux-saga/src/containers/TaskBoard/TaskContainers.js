import React from 'react';
import styles from "./style"
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import grids from "../../constants/Grid";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TaskList from "../../components/TaskList";

const listTask =[
    {
        id :1 ,
        name :"Play" ,
        description : "",
        status :0
    },
    {
        id :2 ,
        name :"Learn" ,
        description : "",
        status :1
    },
    {
        id :3 ,
        name :"Study" ,
        description : "",
        status :2
    },


]
class TaskContainers extends React.Component {
    renderGrid=()=>{
        let result="";
        const {classes} = this.props;
        result = (
            <Grid container spacing={2} >
                {
                    grids.map((grid , index)=>{
                        const taskFilter = listTask.filter(task => task.status === grid.value)
                        return <TaskList taskFilter={taskFilter} grid={grid} index={index}/>
                    })
                }
            </Grid>

        )
        return result
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary">
                    <AddIcon/>Thêm Công Việc
                </Button>
                {this.renderGrid()}

            </div>
        );
    }
}

export default withStyles(styles)(TaskContainers);