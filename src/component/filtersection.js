import React, { useState } from 'react';
import { TextField, MenuItem, Grid } from '@mui/material';

const FilterSection = ({ onFilterChange, data }) => {
    const [filters, setFilters] = useState({
        county: '',
        city: '',
        electricVehicleType: ''
    });

    const getUniqueByKey = (data, key) => {
        return [...new Map(data.map(item => [item[key], item])).values()];
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <Grid container spacing={3} className="Filters">
            <Grid item xs={12} md={4}>
                <TextField
                    select
                    label="County"
                    name="county"
                    value={filters.county}
                    onChange={handleChange}
                    fullWidth
                >
                    <MenuItem value="">All</MenuItem>
                    {
                        getUniqueByKey(data, 'County')?.map((data, index) => <MenuItem value={data?.County} key={index}>{data?.County}</MenuItem>)
                    }
                </TextField>
            </Grid>
            {
                filters.county ?
                    <Grid item xs={12} md={4}>
                        <TextField
                            select
                            label="City"
                            name="city"
                            value={filters.city}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value="">All</MenuItem>
                            {
                                getUniqueByKey(data, 'City')?.map((data, index) => <MenuItem value={data?.City} key={index}>{data?.City}</MenuItem>)
                            }
                        </TextField>
                    </Grid> : ""
            }
            {filters.city ?
                <Grid item xs={12} md={4}>
                    <TextField
                        select
                        label="Electric Vehicle Type"
                        name="electricVehicleType"
                        value={filters.electricVehicleType}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="">All</MenuItem>
                        {
                            getUniqueByKey(data, 'Electric Vehicle Type')?.map((data, index) => <MenuItem value={data?.["Electric Vehicle Type"]} key={index}>{data?.["Electric Vehicle Type"]}</MenuItem>)
                        }
                    </TextField>
                </Grid>
                : ""}
        </Grid>
    );
};

export default FilterSection;
