import React from 'react';
//react-router-dom imports
import { Link } from 'react-router-dom';
// Apollo Imports
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
// note ClipLoader is causing warning errors in console ie componentWillMount,componentWillUpdate..etc
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
// CSS override for the Spinner/Clip loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: whitesmoke;
  align-items: center;
`;

export default function Launch(props) {
  // Get query strinf params
  let { flight_number } = props.match.params;
  // convert param to int
  flight_number = parseInt(flight_number);

  // use @Apollo-react-hooks to fetch query and set variable in query
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number }
  });

  if (loading)
    return (
      <div className='display-4 my-3'>
        <ClipLoader
          css={override}
          sizeUnit={'px'}
          size={80}
          color={'#fff'}
          loading={loading}
        />
      </div>
    );

  if (error) {
    return `Error! ${error}`;
  }

  // destructuring of launch and rocket objects
  const {
    mission_name,
    // flight_number,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch;

  return (
    <div>
      <h1 className='display-4 my-3'>
        <span className='text-dark'>Mission: </span>
        {mission_name}
      </h1>
      <h4 className='mb-3'>Launch Details</h4>
      <ul className='list-group'>
        <li className='list-group-item'>Flight Number: {flight_number}</li>
        <li className='list-group-item'>Launch Year: {launch_year}</li>
        <li className='list-group-item'>
          Launch Successful:{' '}
          <span className={launch_success ? 'text-success' : 'text-danger'}>
            {launch_success ? 'Yes' : 'No'}
          </span>
        </li>
      </ul>
      <h4 className='my-3'>Rocket Details</h4>
      <ul className='list-group'>
        <li className='list-group-item'>Rocket ID: {rocket_id}</li>
        <li className='list-group-item'>Rocket Name: {rocket_name}</li>
        <li className='list-group-item'>Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <Link to='/' className='btn btn-secondary'>
        Back
      </Link>
    </div>
  );
}
