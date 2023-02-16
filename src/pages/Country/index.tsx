import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Countries } from "../../api/types";

interface CountryProps {
  countries: Countries[];
}

const Country: React.FC<CountryProps> = ({ countries }) => {
  const params = useParams() as { id: string };
  console.log(params);

  const [country, setCountry] = useState<Countries>();

  useEffect(() => {
    const filtered = countries.filter((country) => country.cca3 === params.id);
    if (filtered.length > 0) {
      setCountry(filtered[0]);
    } else {
      setCountry(undefined);
    }
  }, [params.id, countries]);

  return (
    <div className="countryPage">
      {country ? (
        <>
          <div className="countryHeader">
            <div className="countryHeaderLeft">
              <div className="countryHeaderLeftLogo">
                {country.name.common[0]}
              </div>
              <div className="countryHeaderLeftText">
                <h3 className="countryHeaderName">{country.name.common}</h3>
                <div className="countryHeaderCapital">{country.capital}</div>
              </div>
            </div>
            <div className="countryHeaderRight">SS</div>
          </div>
          <div className="countryContent">
            <div className="countryContentFlag">
              <img
                className="countryContentImg"
                src={country.flags.svg}
                alt=""
              />
              <div className="countryContentInfo"></div>
            </div>
          </div>
        </>
      ) : (
        <>loading..</>
      )}
    </div>
  );
};

export default Country;
