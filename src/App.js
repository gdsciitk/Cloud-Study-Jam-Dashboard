import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from './pages/LoginPage/LoginPage';
import SharedLayout from './pages/SharedLayout'
import { useState } from "react";

function App() {
  const [themeLight, setThemeType] = useState(false);
  const theme = createTheme({
    palette: {
      mode: themeLight ? "light" : "dark",
      primary: {
        main: themeLight ? "#FFFFFF" : "#151718"
      }
    },
  });
  function handleThemeChange() {
    setThemeType(!themeLight);
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<SharedLayout />}>
            <Route index element={<Dashboard handleThemeChange={handleThemeChange} />}/>
          </Route>
          <Route path='login' element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
