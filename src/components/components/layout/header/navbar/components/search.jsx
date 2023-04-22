import { Form, InputGroup } from "react-bootstrap";
import styles from "../navbar.module.scss";

import SearchIcon from "../../../../../assets/icons/search";
import { useState } from "react";
import Button from "../../../../button";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search({ onClick }) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    if (searchInput?.trim()?.length) {
      navigate("/search?query=" + searchInput);
    }
  };

  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <InputGroup className={`d-flex align-items-center ${styles["Search"]}`}>
      <Form.Control
        className={`${styles["Search__input"]} t-medium`}
        placeholder="Search for products"
        aria-label="Search for products"
        value={searchInput}
        onChange={onSearchInputChange}
        onClick={onSubmit}
        onKeyDown={(e) => {
          e.code === "Enter" && onSubmit();
        }}
      />
      <Button
        onClick={onSubmit}
        className={`d-flex justify-content-center align-items-center ${styles["Search__button"]}`}
        id="search-btn"
      >
        <SearchIcon />
      </Button>
    </InputGroup>
  );
}
