import React from 'react';
import {useQuery, gql} from '@apollo/react-hooks';
import { useParams, Link } from "react-router-dom";

const Joke = function(): any {
  const { category }: any = useParams();
  const get_random_joke = gql`
    query random($category: String!) {
      random(category: $category) {
        id
        value
        categories
        icon_url
      }
    }
  `;
  const { loading, data, refetch } = useQuery(get_random_joke, {
    variables: { category: `${category}` },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loading...</p>;
  const { random }: any = data;

  return (
    <React.Fragment>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
        <div style={{ margin: '20px', fontSize: '20px' }}>
          <span>&#9664;</span>
        </div>
      </Link>
      {random && (
        <div align="center" mr={5}>
          <div>
            <img src={random.icon_url} alt={random.icon_url} style={{ width: "200px", height: "200px" }} />
          </div>
          <div>
            <p>
              {random.value}
            </p>
          </div>
          <p>
            <button
              size="md"
              style={{
                height: "48px",
                width: "200px",
                border: "1px solid blue",
                borderRadius: "5px",
                background: "blue",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px"
              }}
              cursor="pointer"
              onClick={() => refetch()}
            >
              See another joke
            </button>
          </p>
        </div>
      )}
    </React.Fragment>
  );
}

export default Joke;
