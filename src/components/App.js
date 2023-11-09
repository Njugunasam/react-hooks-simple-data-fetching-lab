import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inside the callback for useEffect, send a fetch request to the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // After receiving a response from the API, update state
        setDogImage(data.message);
        setIsLoading(false); // Set isLoading to false after receiving the response
      })
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div className="App">
      {/* Display a <p> tag with the text "Loading..." when the component is first rendered */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // After receiving a response from the API, show the dog image in an <img> tag
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

