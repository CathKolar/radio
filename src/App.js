import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css";
import { Credentials } from "./Credentials";
import axios from "axios";

const App = () => {
  const spotify = Credentials();

  console.log("Rendering App.js");

  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  const [token, setToken] = useState("");
  const [generes, setGeneres] = useState([]);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/browse/categories?local=sv_US", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      });
    });
  }, []);

  return (
    <form onSubmit={() => {}}>
      <div className="App">
        <Dropdown options={generes} />
        <Dropdown options={data} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default App;
