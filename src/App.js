import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/character/1/pictures',
  headers: {
    'X-RapidAPI-Host': 'jikan1.p.rapidapi.com',
    'X-RapidAPI-Key': '48cc8967c3msh492a4472361a750p139fdbjsn88396db9ddcc'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div >
        <nav>
          <ul>
            {info.prev ? (
              <li>
                <button onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li>
                <button onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <CharacterList characters={characters} />

      <div>
        <nav>
          <ul>
            {info.prev ? (
              <li>
                <button onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li>
                <button onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;