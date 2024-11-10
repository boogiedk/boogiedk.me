import * as React from 'react'
import {Await, BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "./pages/Main";
import About from "./pages/About";
import Services from "./pages/Services";
import {StyledEngineProvider} from "@mui/material/styles";
import NavigateBar from "./components/NavigateBar";
import AccessibleMapComponent from "./components/AccessibleMapComponent";
import WayMain from "./pages/Way/WayMain";
import WayCreateMeet from "./pages/Way/WayCreateMeet";
import WayMeet from "./pages/Way/pages/MeetingPage";
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
                    <Route path="/services/where-are-you" element={<WayMain />} />
                    <Route path="/services/where-are-you/create-meet" element={<WayCreateMeet />} />
                    <Route path="/services/where-are-you/meet/:meetId" element={<WayMeet />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
export default App;
