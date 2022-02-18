import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photo from './components/Photo'
import styled, {keyframes} from 'styled-components'

const StyledApp = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  background-color: ${pr => pr.theme.tertiaryColor}

  
`


function App() {

  const [photos, setPhotos] = useState([]);
  const [error, setError] =useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=wSCiKTqZp5WP6eLFeSu5Kutqt2YCjh4xAyia7oAg&date=2012-03-14`)
      .then(resp => {
        setPhotos(resp.data)
        console.log(resp.data)
      })
      .catch(err => {
        setError(true)
      })
  }, [])







  return (
      <StyledApp className="App">
        <h1>NASA Photo of the Day</h1>
        { error && <h2>NO ONE HOME</h2> }
        { <Photo photo={photos.hdurl} title={photos.title} text={photos.explanation} date={photos.date}/> }
      </StyledApp>
  );
}

export default App;
