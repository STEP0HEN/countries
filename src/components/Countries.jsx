import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

const baseUlr = `https://restcountries.eu/rest/v2/name/`;

export default function Countries() {
  const [searchText, setSearchtext] = useState("");
  const [country, setCountry] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchtext(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(`${baseUlr}${searchText}`);
    const data = await response.json();
    setCountry(data);
    console.log(country);
  };
  const info =
    country &&
    country.map(
      ({
        name,
        flag,
        capital,
        population,
        demonym,
        region,
        numericCode,
        callingCodes,
      } = country) => {
        return (
          <div
            key={numericCode}
            style={{
              backgroundColor: "grey",
              width: "70%",
              alignContent: "center",
              fontSize: "22px",
              margin: "5em",
            }}
          >
            <img
              src={flag}
              alt="country flag"
              style={{ backgroundColor: "white" }}
            />
            <Typography
              style={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "white",
                backgroundColor: "white",
                padding: "0.5em",
              }}
              variant="h3"
            >
              {name.toUpperCase()}
            </Typography>
            <Typography>
              {name}'s Capital is
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "black",
                  padding: "0.5em",
                }}
              >
                {capital}
              </span>
            </Typography>
            <Typography>
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "brown",
                  padding: "0.5em",
                }}
              >
                {name}
              </span>
              has a population of about{" "}
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "brown",
                  padding: "0.5em",
                }}
              >
                {population}
              </span>
              people
            </Typography>
            <Typography>
              {name} is in
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "brown",
                  padding: "0.5em",
                }}
              >
                {region}
              </span>
            </Typography>
            <Typography>
              A person from {name} is
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "brown",
                  padding: "0.3em",
                }}
              >
                {demonym}
              </span>
            </Typography>
            <Typography>
              {name}'s international call code is
              <span
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "brown",
                  padding: "0.3em",
                }}
              >
                +{callingCodes}
              </span>
            </Typography>
          </div>
        );
      }
    );

  return (
    <div>
      <form>
        <TextField
          onChange={handleChange}
          variant="filled"
          placeholder="enter country to search"
        />
        {!searchText ? (
          <Button
            disabled
            variant="contained"
            color="primary"
            style={{ height: "4em", marginLeft: "0.5em" }}
          >
            Search
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ height: "4em", marginLeft: "0.5em" }}
          >
            Search
          </Button>
        )}
      </form>
      {info}
    </div>
  );
}
