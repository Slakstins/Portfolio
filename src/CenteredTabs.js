import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //value is the index of the tab
  const handleChange = (event, newValue) => {
    let route;
    if (newValue != 2){ //handle for resume to make sure tab doesn't change
      setValue(newValue);  
      switch (newValue) {
        case 1:
          route = 'Projects';
          break;
        case 0:
          route = 'About';
          break;
        default:
          route = '/';
      }
      props.history.push(route)
      props.updateDisplay(newValue);
    } else {
      
    }

  };
  const label2 = "Resume";
  const label1 = "Projects";
  const label0 = "About";



  return (
    <BrowserRouter>
        <Paper className={classes.root}>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{backgroundColor: "burlyWood"}}
        >
            <Tab label={label0} />
            <Tab label={label1} />
            <a href="https://drive.google.com/file/d/1DEr2rc-DmDDUs3fiMOs7DeD-O0t2FQsk/view?usp=sharing">
              <Tab label={label2}/>
            </a>
        </Tabs>
        </Paper>
    </BrowserRouter>
  );
}
