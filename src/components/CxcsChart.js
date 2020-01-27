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

const dataBase = "ntb";
const uriDataBase = "cxc.php/";

function CxcsChart() {
  const [cxcs, setCxcs] = useState(null);

  const getCxcsFM = () => {
    return axios
      .get(`${uriDataBase}?empresa=${dataBase}`)
      .then(res => {
        console.log(res.data);
        setCxcs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCxcsFM();
  }, []);

  return (
    <Card title="CXC">
      <BarChart
        width={300}
        height={300}
        data={cxcs}
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
        <Bar dataKey="Ingresos" fill="#8884d8" />
      </BarChart>
    </Card>
  );
}

export default CxcsChart;
