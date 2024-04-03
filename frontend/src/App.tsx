import * as React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "./pages/Main";
import About from "./pages/About";
import Services from "./pages/Services";
import {StyledEngineProvider} from "@mui/material/styles";
import NavigateBar from "./components/NavigateBar";
import AccessibleMapComponent from "./components/AccessibleMapComponent";
import WayMain from "./pages/WayMain";
import WayCreateMeet from "./pages/WayCreateMeet";
import WayMeet from "./pages/WayMeet";
import BackendMockService from "./services/BackendMockService";

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
                    <Route path="/where-are-you" element={<WayMain />} />
                    <Route path="/create-meet" element={<WayCreateMeet />} />
                    <Route path="/meet/:meedId" element={<WayMeet />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
export default App;
