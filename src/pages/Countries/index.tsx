import React from "react";
import { Link } from "react-router-dom";
import { Countries } from "../../api/types";

interface ComponentProps {
  query: string;
  countries: Countries[];
}

export default function Content({ query, countries }: ComponentProps) {
  const formatter = new Intl.NumberFormat("fi", { notation: "standard" });

  return (
    <div className="content">
      <div className="contentHeader">
        <div className="contentHeaderField">Flag</div>
        <div className="contentHeaderField">Name</div>
        <div className="contentHeaderField">Region</div>
        <div className="contentHeaderField">Population</div>
        <div className="contentHeaderField">Languages</div>
      </div>
      <div className="contentBody">
        <div className="contentCountryItems">
          {countries.map((country) => (
            <Link
              to={"/country/" + country.cca3}
              className="contentDisableLink"
              key={country.cca3}
            >
              <div className="contentCountryItem">
                <div className="contentItemField">
                  <div className="contentItemFlag">
                    <img
                      src={country.flags.svg}
                      alt=""
                      className="contentItemFlagImg"
                    />
                  </div>
                </div>
                <div className="contentItemField">{country.name.common}</div>
                <div className="contentItemField">{country.region}</div>
                <div className="contentItemField">
                  {formatter.format(country.population)}
                </div>
                <div className="contentItemField">
                  {country.languages
                    ? Object.keys(country.languages).map((key) => (
                        <>
                          {country.languages?.[key]}
                          <br />
                        </>
                      ))
                    : ""}
                  <div className="contentItemFieldLanguage"></div>
                  {/* {mapDictionary(country.languages).map(item =>item)} */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
