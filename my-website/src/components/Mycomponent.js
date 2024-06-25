import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:4000/docs');
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
            setLoading(false); // Set loading to false after data is fetched
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
      if (loading) {
        return <p>Loading...</p>; 
      }
      
    return (
        <div>
        <h1>External Data from Database</h1>
        <ul>
          {data.map(item => (
            <div key={item.id}>
              <h2 >{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </ul>
      </div>
    )
};

export default MyComponent;
