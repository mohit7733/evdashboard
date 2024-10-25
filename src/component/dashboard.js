import React from 'react';
import useCsvData from './csvdata';
import csvFilePath from '../assets/Electric_Vehicle_Population_Data.csv'
import FilterTable from './table_filter';

const Dashboard = () => {
    const data = useCsvData(csvFilePath);
    return (
        <div>
            <header class="header">
                <h1 class="header-title">Electric Vehicle Insights</h1>
                <p class="header-description">Analyzing trends and key metrics from EV data</p>
                <div class="header-details">
                    <p class="detail-item"><strong>Latest Trends:</strong> Discover the newest developments in electric vehicle technology and market growth.</p>
                    <p class="detail-item"><strong>Data Sources:</strong> Insights are derived from reliable databases and government reports on electric vehicles.</p>
                    <p class="detail-item"><strong>User-Friendly Interface:</strong> Easily navigate through the data and visualize key metrics with our interactive dashboard.</p>
                </div>
            </header>

            {data.length > 0 ?
                <FilterTable data={data} />
                : <div className="loader-container">
                    <div className="loader"></div>
                    <p>Loading...</p>
                </div>
            }
            <footer class="footer">
                <div class="footer-content">
                    <p class="footer-text">Data provided by the <strong>EV Population Dataset</strong>.</p>
                    <p class="footer-text">Explore more about electric vehicles at <a href="https://www.ev.gov" target="_blank" class="footer-link">ev.gov</a>.</p>
                </div>
                <div class="footer-socials">
                    <a href="#" class="social-icon">Facebook</a>
                    <a href="#" class="social-icon">Twitter</a>
                    <a href="#" class="social-icon">LinkedIn</a>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Electric Vehicle Insights. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
