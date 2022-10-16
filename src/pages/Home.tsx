import React, { useCallback, useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hooks";
import { TV_ACTOR_ALL, TV_DATA_ALL } from "../misc/types";
import CustomRadio from "../components/CustomRadio";
import {
  RadioInputsWrapper,
  SearchInput,
  SearchButtonWrapper,
} from "./Home.styled";

export default function Home() {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState<any>(null);
  const [serchOption, setSearchOption] = useState("shows");

  const onInputChange = useCallback(
    (ev: React.FormEvent<HTMLInputElement>): void => {
      // console.log(ev.currentTarget.value);
      setInput(ev.currentTarget.value);
    },
    [setInput]
  );

  const onRadioChange = useCallback(
    (ev: { target: { value: string } }): void => {
      setSearchOption(ev.target.value);
      // onSearch();
      // setTimeout(onSearch, 100);
    },
    []
  );

  const onKeyDown = (ev: { keyCode: number }): void => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = (): any => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results != null && results.length > 0) {
      return (
        <div>
          {results[0].show !== undefined ? (
            <ShowGrid data={results} />
          ) : (
            <ActorGrid data={results} />
          )}
        </div>
      );
    }

    return null;
  };

  const onSearch = (): void => {
    //https://api.tvmaze.com/search/shows?q=ironman
    apiGet(`/search/${serchOption}?q=${input}`)
      .then((data: Array<TV_DATA_ALL> | Array<TV_ACTOR_ALL>) => {
        setResults(data);
      })
      .catch(() => {
        console.log("Facing api error");
      });
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={serchOption === "shows"}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={serchOption === "people"}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
}
