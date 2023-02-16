import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ComponentProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}

export default function Header({
  setSearchQuery,
  searchQuery,
}: ComponentProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  return (
    <div className="header">
      <div className="headerLeft">
        <div className="headerBurger"></div>
        <p className="headerCountry">
          <Link to={"/"} className="contentDisableLink">
            Country
          </Link>
        </p>
      </div>
      <div className="headerSearch">
        <div className="headerSearchIcon"></div>
        <input
          type="text"
          className="headerSearchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by country name"
        />
      </div>
    </div>
  );
}
