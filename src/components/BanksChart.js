import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Card } from "antd";
import axios from "axios";

const dataBase = "stark2019";
const uriDataBase = "bancos.php/";

function BanksChart() {
  const [banks, setBanks] = useState(null);

  const getBankFM = () => {
    return axios
      .get(`${uriDataBase}?empresa=${dataBase}`)
      .then(res => {
        console.log(res.data);
        setBanks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBankFM();
  }, []);

  return (
    <Card title="Bancos">
      <BarChart
        width={300}
        height={300}
        data={banks}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Banco" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Ingresos" fill="#8884d8" />
        <Bar dataKey="Egresos" fill="#82ca9d" />
      </BarChart>
    </Card>
  );
}

export default BanksChart;
