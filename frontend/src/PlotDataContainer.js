import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


class PlotDataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.initialConfig
        };
    }

    changeState(update){
        this.setState(update);
        this.props.onChange(update);
    }


    render() {
        return (

            <div>
                <Typography variant="h5" style={{marginBottom: 8}}>Plot Configuration</Typography>
                 <div style={{flexGrow: 1}}>


                    <Grid container
                      direction="column"
                      alignItems="flex-start"
                          wrap="wrap"
                >
                         <TextField item
                        label="t_min"
                        type="number"
                        value={this.state.t_min}
                        onChange={e => this.changeState({ t_min: e.target.value })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField item
                        label="t_max"
                        type="number"
                        value={this.state.t_max}
                        onChange={e => this.changeState({ t_max: e.target.value })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField item
                        label="t_steps"
                        type="number"
                        value={this.state.t_steps}
                        onChange={e => this.changeState({ t_steps: e.target.value })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>


            </div>
            </div>);
    }


}

export default PlotDataContainer;