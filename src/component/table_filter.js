import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import FilterSection from './filtersection';
import EVTypeChart from './evtypechart';
import EVRangeChart from './evrangchart';
import EVTable from './evtable';
import ModelBarChart from './Modelbarchart';
import SalesLineChart from './Salebarchart';

const FilterTable = ({ data }) => {
    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (filters) => {
        let updatedData = data;

        if (filters.county) {
            updatedData = updatedData.filter(item => item.County === filters.county);
        }
        else if (filters.county && filters.city) {
            updatedData = updatedData.filter(item => item.City === filters.city);
        }
        else if (filters.county && filters.city && filters.electricVehicleType) {
            updatedData = updatedData.filter(item => item?.["Electric Vehicle Type"] === filters.electricVehicleType);
        } else {
            updatedData = data
        }

        setFilteredData(updatedData);
    };




    return (
        <Container>
            <Grid container spacing={3}>
                <h2>Filters</h2>
                <FilterSection onFilterChange={handleFilterChange} data={data} />
                <Grid item xs={12} md={6} className='background'>
                    <h2>Number of Vehicles</h2>
                    <EVTypeChart data={filteredData} />
                </Grid>
                <Grid item xs={12} md={6} className='background'>
                    <h2>Average Electric Range</h2>
                    <EVRangeChart data={filteredData} />
                </Grid>
                <Grid item xs={12} md={6} className='background'>
                    <h2>EV Models Distribution</h2>
                    <ModelBarChart data={filteredData} />
                </Grid>
                <Grid item xs={12} md={6} className='background'>
                    <h2>EV Sales Over Time</h2>
                    <SalesLineChart data={filteredData} />
                </Grid>
                <Grid item xs={12} >
                    <h2>EV Models Distribution</h2>
                    <EVTable data={filteredData} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default FilterTable;
