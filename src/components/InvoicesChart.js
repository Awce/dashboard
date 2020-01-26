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
const uriDataBase = "facturas.php/";

function InvoicesChart() {
  const [invoices, setInvoices] = useState(null);
  const getInvoiceFM = () => {
    return axios
      .get(`${uriDataBase}?empresa=${dataBase}`)
      .then(res => {
        console.log(res.data);
        setInvoices(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getInvoiceFM();
  }, []);

  return (
    <Card title="Facturas">
      <BarChart
        width={1000}
        height={300}
        data={invoices}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Alias" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Pagado" stackId="a" fill="#8884d8" />
        <Bar dataKey="Total" stackId="a" fill="#82ca9d" />
      </BarChart>
    </Card>
  );
}

export default InvoicesChart;
