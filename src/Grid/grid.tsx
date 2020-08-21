import React from 'react'
import { Grid, Container, Typography, Avatar, CardContent, Card, CardHeader } from '@material-ui/core'
import { mockedUsers } from '../Model/User'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
   createStyles({
    root: {
        display: 'inline-flex',
        flexDirection: 'column',
        marginTop: 60,
    },
    gridContainer: {
        flex: 1
    },
    messagesContainer: {
        flex: 4,
        marginTop: 50
    }
   })
);

const AppGrid: React.FunctionComponent<{}> = (props) => {
    const classes = useStyles()
    const[users, setUsers] = React.useState(mockedUsers)

    const avatars = users.map( (item, index) => (
        <Avatar src={item.pictureUrl} key={index} style={{marginRight: 30}}/>
    ))

    const messages = users.map( (item, index) => (
        <Card key={index} style={{marginBottom: 20}}>
            <CardHeader
                avatar={ <Avatar src={item.pictureUrl} /> }
                title= {item.name}
                subheader={`${item.position}, ${item.company} ${item.location}`}
            />
            <CardContent>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Typography>
            </CardContent>
        </Card>
    ))

    return(
        <Container className={classes.root}>
            <Container className={classes.gridContainer}>
                <Typography style={{ marginBottom: 20}}>
                    Matches : {users.length}
                </Typography>
                <Grid container direction="row" justify="flex-start" alignItems="stretch">
                    {avatars}
                </Grid>
            </Container>
            <Container className={classes.messagesContainer}>
                <Typography style={{ marginBottom: 20}}>
                    Messages : {users.length}
                </Typography>
                {messages}
            </Container>
        </Container>
    )
}

export default AppGrid