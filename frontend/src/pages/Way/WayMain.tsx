import React from "react";
import './WayMain.css';
import {Button} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


function WayMain() {
    return (
        <div className="MainPage">
            <div>
                <h1>Ты где? </h1>
                <Grid item xs={12} sm={5}>
                    <Box sx={{ marginTop: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Button className="createMeet" variant="contained" href={"create-meet"} >Создать встречу</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box sx={{ marginTop: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined">Присоединиться к встрече</Button>
                    </Box>
                </Grid>
                
              
            </div>
        </div>
    );
}

export default WayMain;
