import * as React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "./pages/Main";
import About from "./pages/About";
import Services from "./pages/Services";
import {StyledEngineProvider} from "@mui/material/styles";
import NavigateBar from "./components/NavigateBar";
import AccessibleMapComponent from "./components/AccessibleMapComponent";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <NavigateBar />
                </StyledEngineProvider>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/map" element={<AccessibleMapComponent />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
export default App;
