import React, { useState, useCallback } from 'react';
import MainPage from '../MainPage';
import { apiGet } from '../../misc/config';
import ShowGrid from '../show/ShowGrid';
import ActorGrid from '../actor/ActorGrid';
import { useLastQuesry } from '../../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';
import CustomRadio from '../CustomRadio';

const renderResults = results => {
  if (results && results.length === 0) {
    return <div>No Results</div>;
  }

  if (results && results.length > 0) {
    return results[0].show ? (
      <ShowGrid data={results} />
    ) : (
      <ActorGrid data={results} />
    );
  }

  return null;
};

const Home = () => {
  const [input, setInput] = useLastQuesry();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onInputChange = useCallback(
    ev => {
      setInput(ev.target.value);
    },
    [setInput]
  );

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const OnRadioChange = useCallback(ev => {
    setSearchOption(ev.target.value);
  }, []);

  return (
    <MainPage>
      <SearchInput
        type="text"
        placeholder="Search"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={OnRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={OnRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(results)}
    </MainPage>
  );
};

export default Home;
