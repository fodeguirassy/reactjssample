import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const TabPanel: React.FunctionComponent<{ 
  [x: string]: any,
  children: any,
  value: any,
  index: any
}> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
       {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const SimpleTabs: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    console.log(`${newValue}`);
    setValue(newValue);
  };


  return (
    <MuiThemeProvider>
    <div className={classes.root}>
        <AppBar>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Box m={3}><Tab label="Feed" {...a11yProps(0)} /></Box>
            <Box m={3}><Tab label="Messages" {...a11yProps(1)} /></Box>
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Hello Feed
        </TabPanel>
        <TabPanel value={value} index={1}>
          Hello Messages
        </TabPanel>
    </div>
    </MuiThemeProvider>

  );
}

export default SimpleTabs