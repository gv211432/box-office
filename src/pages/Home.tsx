import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hooks";
import { TV_ACTOR_ALL, TV_DATA_ALL } from "../misc/types";

export default function Home() {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState<any>(null);
  const [serchOption, setSearchOption] = useState("shows");

  const onInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    // console.log(ev.currentTarget.value);
    setInput(ev.currentTarget.value);
  };

  const onRadioChange = (ev: { target: { value: string } }): void => {
    setSearchOption(ev.target.value);
    // onSearch();
    // setTimeout(onSearch, 100);
  };

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
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="show-search">
          Shows
          <input
            type="radio"
            id="show-search"
            value="shows"
            onChange={onRadioChange}
            name="search-opt"
            checked={serchOption === "shows"}
          />
        </label>
        <label htmlFor="actor-search">
          Actors
          <input
            type="radio"
            id="actor-search"
            value="people"
            onChange={onRadioChange}
            name="search-opt"
            checked={serchOption === "people"}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}
