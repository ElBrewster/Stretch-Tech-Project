import "./App.scss";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "../headerNav/HeaderNav";
import LandingPage from "../landingPage/LandingPage";
import AllActivities from "../allActivities/AllActivities";
import Favorites from "../favorites/Favorites";
import OneActivityView from "../oneActivityView/OneActivityView";
import ErrorPage from "../errorPage/ErrorPage";
// import { getAllActivities } from "../../apiCalls/apiCalls";
import activitiesData from "../../apiCalls/dummyData";

function App() {
  const [careGiverName, setCareGiverName] = useState('Parent')
  const [childName, setChildName] = useState('Kiddo')
  const [activities, setActivityData] = useState([]);
  // const [savedActivities, setSavedActivities] = useState([]);

  const [savedActivities, setSavedActivities] = useState(activitiesData.activities);
  //added lines 16 and 19 for local work and console logged out fetch request and state holding fetch request data

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getAllActivities();
  //     setActivityData(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <main className="main-app">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<LandingPage careGiverName={careGiverName} 
            setCareGiverName={setCareGiverName}
            childName={childName}
            setChildName={setChildName}/>} />
        <Route
          path="/dashboard"
          element={<AllActivities activities={activities} savedActivities={savedActivities} setSavedActivities={setSavedActivities}/>}
        />
        <Route
          path="/favorite-Activities"
          element={<Favorites savedActivities={savedActivities} setSavedActivities={setSavedActivities} childName={childName}
         />}
        />
        <Route path="/Activities/:id" element={<OneActivityView />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
