import { Suspense, useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import ReactGA from 'react-ga4'

function App() {

  const [log, setLog] = useState(true)

  function logout () {
    setLog(false)
  }
 useEffect(() => {
  ReactGA.initialize('G-P2R4PKPWC7', 
    {debug: true})
 }, [])
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <Header/>
        <Suspense>
          <Outlet />
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
