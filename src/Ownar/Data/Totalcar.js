import React, { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";


import axios from "axios";


export default function Totalcar() {
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/Gmaildata"
      );

      setData(response);
      console.log("==>", response);

    } catch (error) {}
    setLoading(false);
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  let iterator = data.values();
  let array1 =[]
  for (let value of iterator) {
   var car = value.car;
  console.log("car",car);
   array1.push(car)
  }
  
  function getOccurrence(array, value) {
      var count = 0;
      array.forEach((v) => (v === value && count++));
      return count;
  }


 var Hatchback = getOccurrence(array1,"Hatchback")
 var Sedan = getOccurrence(array1,"Sedan")
 var Suv = getOccurrence(array1,"SUV/MUV")
 var Premium = getOccurrence(array1,"Primium")
 var Luxury = getOccurrence(array1,"Luxury")










  const mileStaticsData = [
        {
          name: "Hatchback",
          mileStats: Hatchback,
        },
        {
          name: "Premium",
          mileStats: Premium,
        },
        {
          name: "Luxury",
          mileStats: Luxury,
        },
        {
          name: "Sedan",
          mileStats: Sedan,
        },
        {
          name: "Suv",
          mileStats: Suv,
        },
      ];
      




  return (
    <>
       <ResponsiveContainer width="100%">
      <BarChart data={mileStaticsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="mileStats" stroke="#2884ff" fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
    
    </>
  );
}
