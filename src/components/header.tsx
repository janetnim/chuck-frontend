import React from 'react';
import { Link } from 'react-router-dom';

export default (): any => (
  <div>
    <div align="center" mr={5}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <p style={{
            margin: "0",
            padding: "20px",
            background: "blue",
            color: "white"
          }}
        >
        Chuck Norris
        </p>
      </Link>
    </div>
  </div>
);
