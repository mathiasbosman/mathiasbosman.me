import React from "react";
import {BaseStyles, Box, ThemeProvider} from "@primer/react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default class App extends React.Component {

  render() {
    return <ThemeProvider colorMode="auto">
      <BaseStyles>
      <Box className="wrapper" bg="canvas.subtle" p={[0,0,3]} fontSize={1}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/404" element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </Box>
      </BaseStyles>
    </ThemeProvider>;
  }
}
