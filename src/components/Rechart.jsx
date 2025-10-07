import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const Rechart = ({ data }) => {
  if (!data || data.length === 0) return null; // safety check

  return (
    <div className="flex justify-center my-10 overflow-x-scroll">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default Rechart;
