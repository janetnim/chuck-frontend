import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';


const Categories = () => {
  const getCategories = gql`
    query {
      categories {
        categories
      }
    }
  `;
  const { loading, error, data } = useQuery(getCategories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {data.categories &&
        data.categories.categories.map(function (category: any):any {
          return (
            <div style={{
                flex: "0 0 29%",
                margin: "20px",
                border: "1px solid #D8D8D8",
                textAlign: "center",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                borderRadius: "4px"
              }}
            >
              <Link key={category} to={`/joke/${category}`} style={{ textDecoration: 'none' }}>
                <p>{category}</p>
              </Link>
            </div>
          );
      })}
    </div>
  );
}

export default Categories;
