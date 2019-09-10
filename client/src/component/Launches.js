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
        <Launchitems key={launch.flightnumber} launch={launch} key={index} />
      ))}
    </Fragment>
  );
}

// export class Launches extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className='display-4 my-3'>Launches</h1>
//         <Query query={LAUNCHES_QUERY}>
//           {({ loading, error, data }) => {
//             if (loading) return <h4>Loading...</h4>;
//             if (error) console.log(error);
//             console.log(data);
//             return <h1>test</h1>;
//           }}
//         </Query>
//       </div>
//     );
//   }
// }

// export default Launches;
