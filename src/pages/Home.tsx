import React, { useCallback, useEffect, useState } from "react";
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
  // these are some states
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState<any>(null);
  // const [serchOption, setSearchOption] = useState("shows");
  const [isShowSelected, setIsShowSelected] = useState(true);

  // this effect is run when radios are changed
  useEffect(() => {
    if (input) {
      onSearch();
    }
  }, [isShowSelected]);

  // if input is changed this function is called
  const onInputChange = useCallback(
    (ev: React.FormEvent<HTMLInputElement>): void => {
      // console.log(ev.currentTarget.value);
      setInput(ev.currentTarget.value);
    },
    [setInput]
  );

  // on radio this function is called
  const onRadioChange = useCallback((): void => {
    setIsShowSelected((prv) => !prv);
  }, []);

  // on key down this function is called
  const onKeyDown = (ev: {
    keyCode: number;
    target: any;
    preventDefault: any;
  }): void => {
    if (ev.keyCode === 13) {
      onSearch();
      // ev.preventDefault();
      // ev.target.blur();
    }
  };

  // this is called to render all body cards
  const renderResults = (): any => {
    if (results && results.length === 0) {
      return <div style={{ textAlign: "center" }}>Results not found!!</div>;
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

  // this is called to search and update the results
  const onSearch = (e: any = "", param = "void"): void => {
    //https://api.tvmaze.com/search/shows?q=ironman

    if (param === "void") {
      const searchStr = isShowSelected ? "shows" : "people";
      apiGet(`/search/${searchStr}?q=${input}`)
        .then((data: Array<TV_DATA_ALL> | Array<TV_ACTOR_ALL>) => {
          setResults(data);
        })
        .catch(() => {
          console.log("Facing api error");
        });
    } else {
      apiGet(`/search/${param}?q=${input}`)
        .then((data: Array<TV_DATA_ALL> | Array<TV_ACTOR_ALL>) => {
          setResults(data);
        })
        .catch(() => {
          console.log("Facing api error");
        });
    }
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
            checked={isShowSelected}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowSelected}
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
