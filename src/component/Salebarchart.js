import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesLineChart = ({ data }) => {
  const salesData = data.reduce((acc, curr) => {
    const year = curr['Model Year'];
    const existing = acc.find(item => item.year === year);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ year, count: 1 });
    }
    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
