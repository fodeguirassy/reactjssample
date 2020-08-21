import React, { useContext, useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { CardMedia, CardHeader, Avatar, Typography, Chip, Box, Container, TextField, Button, Snackbar } from '@material-ui/core';
import PostsContext from '../Context/PostsContext/PostsContext'
import { Post, User, currentUser, mockedSkills } from '../Model/User'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
        },
        headerContainer: {
            display: 'flex',
            flex: 1,
            alignItems :'stretch',
            flexDirection: 'row',
            marginTop: 50
        },
        title : {
            flex: 1
        },
        textFieldContainer: {
            flex: 15,
            marginTop: 50,
            display: 'flex',
            flexDirection: 'row', 
        },
        content: {
            flex: 1,
        },
        footerContainer: {
            flex: 2,
            marginTop: 50,
            display: 'flex',
            flexDirection: 'row',
        },
        validateButton: {
            flex: 1
        }
    })
);

const NewPost: React.FunctionComponent<{}> = () => {
    const classes = useStyles();
    const [rawPost, setRawPost] = useState("")
    const [snackVisible, setSnackVisible] = useState(false)

    const posts = useContext(PostsContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRawPost(event.target.value)
    }

    const onInputValidated = () => {
        let post = new Post(
            currentUser,
            rawPost,
            mockedSkills,
            new Date()
        )
        posts.push(post)
        setRawPost('')
        setSnackVisible(true)
    }
    const onSnackGone = () => {
        setSnackVisible(false)
    }

    return(
        <div >
            <Container className={classes.root}>
                <div className={classes.headerContainer}>
                    <Typography className={classes.title} align="center" variant="h3" gutterBottom>
                        Créer un post
                    </Typography>
                </div>
                <div className={classes.textFieldContainer}>
                    <TextField
                        multiline
                        variant="outlined"
                        className = {classes.content}
                        rows={13}
                        onChange={handleChange}
                        value={rawPost}
                    > 
                    </TextField>
                </div>
                <div className={classes.footerContainer}>
                    <div style={{flex: 3}}></div>
                    <Button className={classes.validateButton} variant="contained" color="primary" onClick={onInputValidated}>
                        Publier
                    </Button>
                    <div style={{flex: 3}}></div>
                </div>
                <div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        open={snackVisible}
                        autoHideDuration={3000}
                        onClose={onSnackGone}
                        message="Votre message a bien été publié"
                    />
                </div>
            </Container>
        </div>
    )
}

export default NewPost