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
const uriDataBase = "cxp.php/";

function CxpsChart() {
  const [cxps, setCxps] = useState(null);

  const getCxpsFM = () => {
    return axios
      .get(`${uriDataBase}?empresa=${dataBase}`)
      .then(res => {
        console.log(res.data);
        setCxps(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCxpsFM();
  }, []);

  return (
    <Card title="CXP">
      <BarChart
        width={300}
        height={300}
        data={cxps}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Cobranza" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Egresos" fill="#82ca9d" />
      </BarChart>
    </Card>
  );
}

export default CxpsChart;
