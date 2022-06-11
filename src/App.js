import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import './App.css';
import React, { Component }  from 'react';
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="TRENDING NOW"
        fetchURL={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="TOP RATED"
        fetchURL={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title="ACTION MOVIES"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="COMEDY MOVIES"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="HORROR MOVIES"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="ROMANTIC MOVIES"
        fetchURL={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="DOCUMENTARIES"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
