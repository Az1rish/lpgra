import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Nav } from './Components';
import { Routes, Route } from 'react-router-dom';
import { 
  LandingPage, 
  LinksPage, 
  BylawsPage, 
  MinutesListPage, 
  BoardPage, 
  ContactPage, 
  MeetingPage, 
  NewslettersListPage, 
  ElectionsPage, 
  RequestFormPage } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <div className="Nav">
            <Nav />
          </div>
          <main className="App__main">
            <Routes>
              <Route
                path="/"
                element={<LandingPage />}
              />
              <Route
                path="/minutes"
                element={<MinutesListPage />}
              />
              <Route
                path="/minutes/:minutesId"
                element={<MeetingPage />}
              />
              <Route
                path="/links"
                element={<LinksPage />}
              />
              <Route
                path="/bylaws"
                element={<BylawsPage />}
              />
              <Route
                path="/board"
                element={<BoardPage />}
              />
              <Route
                path="/contact"
                element={<ContactPage />}
              />
              <Route
                path="/newsletters"
                element={<NewslettersListPage />}
              />
              <Route
                path="/elections"
                element={<ElectionsPage />}
              />
              <Route
                path="/requestForm"
                element={<RequestFormPage />}
              />
            </Routes>
          </main>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
