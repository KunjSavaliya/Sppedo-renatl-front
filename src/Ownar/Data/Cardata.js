import React,{useEffect,useState} from 'react';
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
     var state = value.state;
    console.log("state",state);
     array1.push(state)
    }
    
    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }
  
  
   var Maharashtra = getOccurrence(array1,"Maharashtra")
   var Rajasthan = getOccurrence(array1,"Rajasthan")
   var Gujarat = getOccurrence(array1,"Gujarat")
  //  var Premium = getOccurrence(array1,"Primium")
  //  var Luxury = getOccurrence(array1,"Luxury")
  

    const carStaticsData = [
      
      {
        name: "Maharashtra",
        week: 0,
        // prevWeek: 0,
      },
      {
        name: "Maharashtra",
        week: Maharashtra,
        // prevWeek: 1398,
      },
      {
        name: "Rajasthan",
        week: Rajasthan,
        // prevWeek: 9800,
      },
      {
        name: "Gujarat",  
        week: Gujarat,
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
          dataKey="week"
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







  