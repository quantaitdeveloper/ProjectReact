import React, {Component} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {Icon, withStyles} from "@material-ui/core";
import styles from "./style";
import Fab from '@material-ui/core/Fab';

class TaskItem extends Component {
    render() {
        const {classes , task , grid , index} = this.props;
        return (
            <Card key={index} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {task.name}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="caption" display="block">
                                {grid.label}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="Edit" size="small">
                        <Icon fontSize="small">
                            edit_icon
                        </Icon>
                    </Fab>
                    <Fab color="primary" aria-label="Delete" size="small">
                        <Icon fontSize="small">
                            delete_icon
                        </Icon>
                    </Fab>

                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);