import "./App.css";
import { Route, Routes } from "react-router";
import MainHeader from "./components/MainHeader";
import React from "./components/React";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import Content from "./components/Content";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [langs, setLangs] = useState({});
  const [titles, setTitles] = useState();

  useEffect(() => {
    fetch("ProgLang.json")
      .then((e) => e.json())
      .then((res) => setLangs(res));
  }, []);

  useEffect(() => {
    setTitles(Object.keys(langs));
  }, [langs]);

  return (
    <>
      <MainHeader data={langs} />
      <Routes>
        <></>
        {titles &&
          titles.map((title, i) => (
            <Route
              key={i}
              path={`${title}`}
              element={<Contents data={Object.keys(langs[`${title}`])} />}
            >
              {Object.keys(langs[`${title}`]).map((innerTitle, i) => {
                return (
                  <Route
                    key={i}
                    path={`${innerTitle}`}
                    element={
                      <Content
                        data={langs[`${title}`][`${innerTitle}`]}
                        title={langs[`${title}`]}
                      />
                    }
                  />
                );
              })}
            </Route>
          ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
