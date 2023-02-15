import React from "react";

export default function Country() {
  return (
    <div className="countryPage">
      <div className="countryHeader">
        <div className="countryHeaderLeft">
          <div className="countryHeaderLeftLogo">A</div>
          <div className="countryHeaderLeftText">
            <h3 className="countryHeaderName">Afganistan!!!!</h3>
            <div className="countryHeaderCapital">Kabul</div>
          </div>
        </div>
        <div className="countryHeaderRight">SS</div>
      </div>
      <div className="countryContent">
        <div className="countryContentFlag">
        <img className="countryContentImg" src="https://flagcdn.com/jp.svg" alt="" />
        </div>
        <div className="countryContentInfo">

        </div>
      </div>
    </div>
  );
}
