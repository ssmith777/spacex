import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';
import Launchitems from './Launchitem';
import MissionKey from './MissionKey';

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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: whitesmoke;
  align-items: center;
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  // if (loading)
  //   return (
  //     <div className='display-4 my-3'>
  //       <ClipLoader
  //         css={override}
  //         sizeUnit={'px'}
  //         size={80}
  //         color={'#fff'}
  //         loading={loading}
  //       />
  //     </div>
  //   );

  if (error) return `Error! ${error.message}`;

  return (
    <Fragment>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      {loading ? (
        <div className='display-4 my-3'>
          <ClipLoader
            css={override}
            sizeUnit={'px'}
            size={80}
            color={'#fff'}
            loading={loading}
          />
        </div>
      ) : (
        data.launches.map((launch, index) => (
          <Launchitems launch={launch} key={index} />
        ))
      )}
    </Fragment>
  );
}
