import React from "react";
import GraySearchSvg from "../../../assets/svg/GraySearchSvg";
import { SearchForm } from "./styles";

function Search() {
  return (
    <SearchForm>
      <input placeholder="글 내용, @작성자 검색" />
      <GraySearchSvg />
    </SearchForm>
  );
}

export default Search;
