import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ModelBarChart = ({ data }) => {
  const modelData = data.reduce((acc, curr) => {
    const existing = acc.find(item => item.model === curr.Model);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ model: curr.Model, count: 1 });
    }
    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={modelData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="model" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ModelBarChart;
