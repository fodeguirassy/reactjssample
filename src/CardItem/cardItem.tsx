import React, { useState, useContext } from 'react'
import { Card, CardContent, Container, Button } from '@material-ui/core'
import { CardHeader, Avatar, Typography, Chip } from '@material-ui/core';
import  DoneIcon from '@material-ui/icons/Done' 
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import PostsContext from '../Context/PostsContext/PostsContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-flex',
      height: '100%',
      alignItems: 'stretch',
      flexDirection: 'column',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
      },
    },
    cardItem: {
        flex: 1
    },

    buttons: {
        display: 'inline-flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        width: '100%'
    },
    buttonItem: {
        flex: 1
    },
    chipItem: {
        marginLeft: '20px',
    }
  }),
);

const CardItem: React.FunctionComponent<{}> = (props) => {
    const posts = useContext(PostsContext)
    const classes = useStyles();
    const [index, setIndex] = useState(0)
    const [currentPost, setCurrentPost] = useState(posts[index])
    
    const handleSkip = () => {
        if(index + 1 < posts.length) {
            setCurrentPost(posts[index + 1])
            setIndex(index + 1)
        } else {
            setIndex(0)
            setCurrentPost(posts[0])
        }
    };

    return(

        <div style={{ display: 'flex', alignItems:'stretch', flexDirection: 'row' }}>
            <Container className={classes.root}> 
                <div style={{flex:20}}></div>
                <Card style={{flex: 3}}>
                    <CardHeader avatar={<Avatar src={currentPost.owner.pictureUrl}/> } 
                        title={currentPost.owner.name}
                        subheader={`${currentPost.owner.position}, ${currentPost.owner.company} ${currentPost.owner.location}`}
                    />
                    <CardContent>
                        <Typography>
                            {currentPost.content}
                        </Typography>
                        
                        <div style={{display: 'flex', marginTop: 45}}>
                            <Typography style={{flex: 1}} variant="h6" component="h6">
                                Requested Skills
                            </Typography>
                            <div style={{flex: 3}}>
                                {
                                    currentPost.requestedSkills.map( (item, index) => 
                                    <Chip label={item.title} icon={<DoneIcon/>} className={classes.chipItem} key={index}/>
                                )
                                }
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div style={{display: 'flex', flexDirection: 'row', alignItems:'stretch', flex: 1}}>
                    <div className={classes.buttonItem}><Button variant="contained" color="primary" onClick={handleSkip}>Help</Button></div>
                    <div style={{flex:20}}></div>
                    <div className={classes.buttonItem}><Button variant="contained" color="secondary" onClick={handleSkip}>Skip</Button></div>
                </div> 
        </Container>
        
     </div>
    )
}

export default CardItem
