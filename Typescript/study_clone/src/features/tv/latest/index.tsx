import styled from "@emotion/styled";
import React from "react";
import Card from "../../../components/Card";
import useLatestTv from "./useLatestTv";

const Base = styled.div``;
const Title = styled.h4``;

const LatestTvSection: React.FC = () => {
  const { data, isLoading } = useLatestTv();

  return (
    <Base>
      <Title>최근 상영작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Card
          linkUrl={`/tv/${data.data.id}`}
          title={data.data.name}
          posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}
          voteAverage={data.data.vote_average}
          year={data.data.last_air_date.toString()}
        />
      )}
    </Base>
  );
};

export default LatestTvSection;
