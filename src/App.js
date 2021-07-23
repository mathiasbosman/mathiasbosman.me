import React from "react";
import {BaseStyles, Box, ThemeProvider} from "@primer/components";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default class App extends React.Component {

  render() {
    return <ThemeProvider colorMode="auto">
      <Box className="wrapper" bg="bg.tertiary" p={3}>
        <BaseStyles>
          <Switch>
            <Route path="/404" component={NotFound}/>
            <Route exact="exact" path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </BaseStyles>
      </Box>
    </ThemeProvider>;
  }
}
