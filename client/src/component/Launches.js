import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Launchitems from './Launchitem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return '<h1>Loading...</h1>';
  if (error) return `Error! ${error.message}`;

  return (
    <Fragment>
      {data.launches.map((launch, index) => (
        <Launchitems launch={launch} key={index} />
      ))}
    </Fragment>
  );
}
