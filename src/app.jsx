import React, { useEffect, useState } from "react";

// Import the Home page component
// import Home from "./pages/home.jsx";
// import Fetch from "./pages/fetch.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";
import List from "./components/List";
import withListLoading from "./components/withListLoading";

function app() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    //const apiUrl = `https://api.github.com/users/d4okeefe/repos`;
    const apiUrl = `https://ergast.com/api/f1/2021.json`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(repos => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <h1>F1 Races 2021</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            💚
          </span>{" "}
          with by Daniel O'Keefe
        </div>
      </footer>
    </div>
  );
}
export default app;

// export default function App() {
//   return (
//     <>
//       <Home />
//      <Fetch />
//     </>
//   );
// }
