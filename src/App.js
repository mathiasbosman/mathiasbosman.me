import React from "react";
import {BaseStyles, Box, ThemeProvider} from "@primer/components";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default class App extends React.Component {

  render() {
    return <ThemeProvider colorMode="auto">
      <BaseStyles>
      <Box className="wrapper" bg="canvas.subtle" p={3} fontSize={1}>
          <Switch>
            <Route path="/404" component={NotFound}/>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
      </Box>
      </BaseStyles>
    </ThemeProvider>;
  }
}
