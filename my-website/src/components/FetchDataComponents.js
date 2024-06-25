// src/components/FetchDataComponent.js

import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

const FetchDataComponent = () => {
    const { siteConfig } = useDocusaurusContext();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/doc');
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <nav>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <Link to={`${siteConfig.baseUrl}${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FetchDataComponent;
