import React, { useState, useEffect } from "react";
import { Input } from "antd";
import axios from "axios";

function Home() {
  const [purcharses, setPurcharses] = useState("");
  const [search, setSearch] = useState("");

  const handleSetSearch = e => {
    setSearch(e.target.value);
  };

  const getPurcharses = () => {
    return axios
      .get(`/bancos.php?empresa=ntb`)
      .then(res => {
        console.log(res.data);
        let getData = res.data;
        setPurcharses(getData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPurcharses();
  }, []);

  return (
    <div>
      <h1>Hola este es el inicio</h1>
      <Input
        value={search}
        placeholder="Basic usage"
        onChange={handleSetSearch}
      />
      <ul>
        <li>{purcharses}</li>
      </ul>
    </div>
  );
}

export default Home;
