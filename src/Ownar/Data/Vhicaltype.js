import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";


export default function Cardata() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/Addcardata"
      );

      setData(response);
      console.log("===>", response);

    } catch (error) { }
    setLoading(false);

  };

  useEffect(() => {
    fetchData();
  }, []);

  let iterator = data.values();
  let array1 = []
  for (let value of iterator) {
    var carname = value.carname;
    console.log("carname", carname);
    array1.push(carname)
  }

  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
  }


  var HatchBack = getOccurrence(array1, "HatchBack");


  var Sedan = getOccurrence(array1, "Sedan")

  var Suv = getOccurrence(array1, "SUV/MUV")
  var Premium = getOccurrence(array1, "Primium")
  var Luxury = getOccurrence(array1, "Luxury")

  console.log("w=>", Sedan);

  const carStaticsData = [

    {
      // name: "HatchBack",
      Vechialtype: 0,
      // prevWeek: 0,
    },
    {
      name: "HatchBack",
      Vechialtype: HatchBack,
      // prevWeek: 0,
    },
    {
      name: "Sedan",
      Vechialtype: Sedan,
      // prevWeek: 1398,
    },
    {
      name: "SUV/MUV",
      Vechialtype: Suv,
      // prevWeek: 9800,
    },
    {
      name: "Primium",
      Vechialtype: Premium,
      // prevWeek: 2400,
    },
    {
      name: "Luxury",
      Vechialtype: Luxury,
      // prevWeek: 2400,
    },
  ];


  return (
    <>
      <ResponsiveContainer width="100%">
        <AreaChart
          data={carStaticsData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#ddd" />

          <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
          <Tooltip wrapperClassName="tooltip__style" cursor={false} />
          <Area
            type="monotone"
            dataKey="Vechialtype"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="prevWeek"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>

    </>
  )
}







