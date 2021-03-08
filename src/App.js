
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import DocumentMeta from 'react-document-meta';
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import { Typography, Tabs, Tab, ThemeProvider, Grid} from '@material-ui/core';
import CenteredTabs from './CenteredTabs';
import {createBrowserHistory} from 'history';
import { createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[900]
    },
    secondary: {
      main: green[500],
    }
  },
});

function App() {
  const[pageNum, setPageNum] = React.useState(0);


  function updateDisplay(newPageNum){
    setPageNum(newPageNum);

  }

  const history = createBrowserHistory();


  return (
    <ThemeProvider theme={theme}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <CssBaseline />
      <BrowserRouter>
        <DocumentMeta {...meta}/>
        <div className="App disabledXBar" >

          <div style={{background: "#d9d9d9"}}>
            <Grid className="titleNameGrid" container spacing={4} justify="center">

              <Grid>
                <Typography variant="h3" className="seth">
                  Seth Lakstins
                </Typography>
              </Grid>
              <Grid item>

              <CenteredTabs 
                updateDisplay={updateDisplay}
                history={history}
              ></CenteredTabs>
              </Grid>
            </Grid>
          </div>
          <Grid className="titleNameGrid" container spacing={4} justify="center">
            <Grid item>
            </Grid>
            <Grid item>
              <Typography variant="h1" className="title">
                {pageNum == 1 && <div >Projects</div>}
                {pageNum == 0 && <div>About me</div>}
              </Typography>
            </Grid>
          </Grid>
          {pageNum == 1 && <Projects></Projects>}
          {pageNum == 0 && <About></About>}
          <div className="navigation">
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const meta = {
  title: 'Seth Lakstins Portfolio',
  description: 'A portfolio created with React',
  meta: {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width"
  }
}

export default App;
