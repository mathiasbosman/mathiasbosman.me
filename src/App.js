import React from "react";
import {BaseStyles, Box, ThemeProvider} from "@primer/components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default class App extends React.Component {

  render() {
    return <ThemeProvider colorMode="auto">
      <BaseStyles>
        <Box className="wrapper" bg="canvas.subtle" p={3} fontSize={1}>
          <Routes>
            <Route path="/404" element={<NotFound/>}/>
            <Route exact="exact" path="/" element={<Home/>}/>
            <Route element={<NotFound/>}/>
          </Routes>
        </Box>
      </BaseStyles>
    </ThemeProvider>;
  }
}
