import { AppBar, Tabs, Tab } from '@material-ui/core'
import React from 'react'
import Feed from '../Feed/feed'
import Messages from '../Messages/messages'
import NewPost from '../NewPost/NewPost'
import { Favorite, List, PostAdd } from '@material-ui/icons'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import PostsContext from '../Context/PostsContext/PostsContext'
import { mockedPost } from '../Model/User'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     width: '100%',
     display: 'flex',
     flexDirection: 'row'
    },
    appbarTitle: {
        flex: 3
    },
    tabs: {
        flex: 2
    }
  })
);


const Home: React.FunctionComponent<{}> = (props) => {
    const classes = useStyles()
    const [selectedTab, setSelectedTab] = React.useState(0)

    const handleChange = (event: any, newValue: number) => {
        setSelectedTab(newValue)
    } 

    return (
        <PostsContext.Provider value={mockedPost.sort( (a,b) => Number(b.createdAt) - Number(a.createdAt) )}>
            <>
                <AppBar position="static" className={classes.root}>
                    <div className={classes.appbarTitle}></div>
                    <Tabs value={selectedTab} onChange={handleChange} className={classes.tabs}>
                            <Tab icon={<List fontSize="large"/>}/>
                            <Tab icon={<Favorite fontSize="large"/>}/>
                            <Tab icon={<PostAdd fontSize="large"/>}/>
                    </Tabs>
                </AppBar>

                {selectedTab === 0 && <Feed /> }
                {selectedTab === 1 && <Messages /> }
                {selectedTab === 2 && <NewPost /> }
            </>
        </PostsContext.Provider>
    )
}

export default Home