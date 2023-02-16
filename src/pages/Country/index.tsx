import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Countries } from "../../api/types";

interface CountryProps {}

const Country: React.FC<CountryProps> = () => {
  const params = useParams() as { id: string };
  console.log(params);

  const [country, setCountry] = useState<Countries>();

  useEffect(() => {
    api.getCountriesByCCA3(params.id).then((data) => {
      setCountry(data[0]);
    });
  }, [params.id]);

  return (
    <div className="countryPage">
      {country ? <>
      <div className="countryHeader">
        <div className="countryHeaderLeft">
          <div className="countryHeaderLeftLogo">{country.name.common[0]}</div>
          <div className="countryHeaderLeftText">
            <h3 className="countryHeaderName">{country.name.common}</h3>
            <div className="countryHeaderCapital">{country.capital}</div>
          </div>
        </div>
        <div className="countryHeaderRight">SS</div>
      </div>
      <div className="countryContent">
          <div className="countryContentFlag">
            <img className="countryContentImg" src={country.flags.svg} alt="" />
            <div className="countryContentInfo"></div>
          </div>
      </div>
      </> : <>loading..</>}
    </div>
  );
};

export default Country;
