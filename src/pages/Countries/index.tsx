import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import { Countries } from "../../api/types";
import mapDictionary from "../../utils/mapDictionary";

export default function Content() {
  const [countries, setCountries] = useState<Array<Countries>>([]);

  useEffect(() => {
    api.getCountries().then(setCountries);
  }, []);

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
          <Link to={'/country/' + country.cca3} className="contentDisableLink">
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
              <div className="contentItemField">{country.population}</div>
              <div className="contentItemField">
                {country.languages ? Object.keys(country.languages).map(key => <>
                  {country.languages?.[key]}
                  <br/>
                </>) : ''}
                <div className="contentItemFieldLanguage"></div>
                {/* {mapDictionary(country.languages).map(item =>item)} */}
              </div>
            </div></Link>
          ))}

        </div>
      </div>
    </div>
  );
}
