/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useShow } from '../../misc/custom-hooks';
import Cast from '../show/Cast';
import Details from '../show/Details';
import Seasons from '../show/Seasons';
import ShowMainData from '../show/ShowMainData';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
  const { showId } = useParams();

  const { show, isLoading, error } = useShow(showId);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }
  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
