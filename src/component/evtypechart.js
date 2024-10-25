import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EVTypeChart = ({ data }) => {
    const filteredData = data.filter(item => item['Electric Vehicle Type']);
    const evTypes = filteredData.reduce((acc, curr) => {
        acc[curr['Electric Vehicle Type']] = (acc[curr['Electric Vehicle Type']] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(evTypes),
        datasets: [
            {
                label: 'Number of Vehicles',
                data: Object.values(evTypes),
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)'],
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default EVTypeChart;
