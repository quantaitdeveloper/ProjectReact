import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import styles from "./style"
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import TaskItem from "../TaskItem";


class TaskList extends Component {
    render() {
        const {classes, taskFilter, grid, index} = this.props;
        return (
            <Grid item lg={4} key={index}>
                <Box ml={1} mt={1} mb={1} mr={1}>
                    <div className={classes.status}>{grid.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        taskFilter.map((task, index) => {
                            return <TaskItem task={task} index={index} grid={grid}/>
                        })
                    }
                </div>
            </Grid>
        );
    }
}
export default withStyles(styles)(TaskList);