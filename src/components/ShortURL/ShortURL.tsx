import React, { useState } from "react";
import "./ShortURL.css";
import { Link } from "react-router-dom";
const ShortURL = () => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const accessToken = "e2324aab5351af9a290010ece4e2f10069405847";
  const apiurl = "https://api-ssl.bitly.com/v4/shorten";

  const handleInputChange = (event) => {
    setLongURL(event.target.value);
  };

  const fetchURL = async () => {
    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: longURL,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const shortenedURL = data.link;
        setShortURL(shortenedURL);
        setLongURL("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchURL();
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    fetchURL();
  };

  return (
    <div className="shortUrl">
      <div className="relative w-4/5 mx-auto">
        <form action="" onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="Short your url...."
            className="input input-bordered w-full pr-16"
            value={longURL}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <input
            type="submit"
            value="Go"
            className="btn btn-primary absolute right-0"
          />
        </form>
        {shortURL && (
          <p className="text-left mt-4 text-white">
            Shortened URL :{" "}
            <Link to={shortURL} target="_blank" className="text-red-400">
              {shortURL}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default ShortURL;
