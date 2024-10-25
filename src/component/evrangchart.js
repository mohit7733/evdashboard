import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EVRangeChart = ({ data }) => {
  const makeRange = data.reduce((acc, curr) => {
    const electricRange = curr?.["Electric Range"];
    const make = curr.Make;

    if (electricRange > 0) {
      acc[make] = (acc[make] || []).concat(electricRange);
    }
    return acc;
  }, {});

  const labels = Object.keys(makeRange);
  const averageRanges = labels.map(make => {
    const ranges = makeRange[make];

    if (ranges && ranges.length > 0) {
      const total = ranges.reduce((acc, curr) => acc + curr, 0);
      return (total / ranges.length).toFixed(2); 
    } else {
      return 0; 
    }
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Average Electric Range',
        data: averageRanges,
        borderColor: 'rgba(54, 162, 235, 0.6)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default EVRangeChart;
