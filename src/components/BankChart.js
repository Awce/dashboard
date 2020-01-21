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

function BankChart() {
  const [banks, setBanks] = useState(null);

  const getDataFM = () => {
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
    getDataFM();
  }, []);

  return (
    <Card title="Bancos" style={{ width: 600 }}>
      <BarChart
        width={500}
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

export default BankChart;
