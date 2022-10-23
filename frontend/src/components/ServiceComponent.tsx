import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {Button} from "@mui/material";
import gear from "../images/gear-logo.png"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

type ServiceProps = {
    name: string,
    description: string,
    serviceLink: string,
    serviceState: ServiceState,
    serviceLogo?: string
}

enum ServiceState {
    Active = 1,
    Offline = 2,
    InDeveloping = 3
}

function getStatus(serviceState: ServiceState) {
    switch (serviceState) {
        case ServiceState.Active:
            return <div>Активный</div>
        case ServiceState.InDeveloping:
            return <div>В разработке</div>;
        case ServiceState.Offline:
            return <div>Отключен</div>;
    }
}

function ServiceComponent({name, description, serviceLink, serviceState, serviceLogo = gear} : ServiceProps) {
    return (
        <Paper
            sx={{
                p:2,
                ml:'auto',
                mr:'auto',
                mb:'40px',
                maxWidth: '80%',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase href={serviceLink} sx={{ width: 128, height: 128 }}>
                        <Img src={serviceLogo} alt="complex" />
                    </ButtonBase>
                </Grid>
                <Grid textAlign={"left"} item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button href={serviceLink}>Перейти</Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            {getStatus(serviceState)}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ServiceComponent;
