import React from "react";
import { Countries } from "../../api/types";

interface CountryProps {}

const Country: React.FC<CountryProps> = () => {
  // Пример массива стран
  const countries: Countries[] = [
    {
      name: {
        common: "Afghanistan",
        official: "Islamic Republic of Afghanistan",
        nativeName: {
          prs: { official: "جمهوری اسلامی افغانستان", common: "افغانستان" },
          pus: { official: "د افغانستان اسلامي جمهوریت", common: "افغانستان" },
          tuk: {
            official: "Owganystan Yslam Respublikasy",
            common: "Owganystan",
          },
        },
      },
      tld: [".af"],
      cca2: "AF",
      ccn3: "004",
      cca3: "AFG",
      cioc: "AFG",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { AFN: { name: "Afghan afghani", symbol: "؋" } },
      idd: { root: "+9", suffixes: ["3"] },
      capital: ["Kabul"],
      altSpellings: ["AF", "Afġānistān"],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { prs: "Dari", pus: "Pashto", tuk: "Turkmen" },
      translations: {
        ara: { official: "جمهورية أففانستان الإسلامية", common: "أفغانستان" },
        bre: {
          official: "Republik Islamek Afghanistan",
          common: "Afghanistan",
        },
        ces: {
          official: "Afghánská islámská republika",
          common: "Afghánistán",
        },
        cym: {
          official: "Gweriniaeth Islamaidd Affganistan",
          common: "Affganistan",
        },
        deu: {
          official: "Islamische Republik Afghanistan",
          common: "Afghanistan",
        },
        est: { official: "Afganistani Islamivabariik", common: "Afganistan" },
        fin: {
          official: "Afganistanin islamilainen tasavalta",
          common: "Afganistan",
        },
        fra: {
          official: "République islamique d'Afghanistan",
          common: "Afghanistan",
        },
        hrv: {
          official: "Islamska Republika Afganistan",
          common: "Afganistan",
        },
        hun: {
          official: "Afganisztáni Iszlám Köztársaság",
          common: "Afganisztán",
        },
        ita: {
          official: "Repubblica islamica dell'Afghanistan",
          common: "Afghanistan",
        },
        jpn: {
          official: "アフガニスタン·イスラム共和国",
          common: "アフガニスタン",
        },
        kor: { official: "아프가니스탄 이슬람 공화국", common: "아프가니스탄" },
        nld: {
          official: "Islamitische Republiek Afghanistan",
          common: "Afghanistan",
        },
        per: { official: "جمهوری اسلامی افغانستان", common: "افغانستان" },
        pol: {
          official: "Islamska Republika Afganistanu",
          common: "Afganistan",
        },
        por: {
          official: "República Islâmica do Afeganistão",
          common: "Afeganistão",
        },
        rus: {
          official: "Исламская Республика Афганистан",
          common: "Афганистан",
        },
        slk: { official: "Afgánsky islamský štát", common: "Afganistan" },
        spa: {
          official: "República Islámica de Afganistán",
          common: "Afganistán",
        },
        srp: {
          official: "Исламска Република Авганистан",
          common: "Авганистан",
        },
        swe: {
          official: "Islamiska republiken Afghanistan",
          common: "Afghanistan",
        },
        tur: { official: "Afganistan İslam Cumhuriyeti", common: "Afganistan" },
        urd: { official: "اسلامی جمہوریہ افغانستان", common: "افغانستان" },
        zho: { official: "阿富汗伊斯兰共和国", common: "阿富汗" },
      },
      latlng: [33, 65],
      landlocked: true,
      borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
      area: 652230,
      demonyms: {
        eng: { f: "Afghan", m: "Afghan" },
        fra: { f: "Afghane", m: "Afghan" },
      },
      flag: "🇦🇫",
      maps: {
        googleMaps: "https://goo.gl/maps/BXBGw7yUUFknCfva9",
        openStreetMaps: "https://www.openstreetmap.org/relation/303427",
      },
      population: 40218234,
      fifa: "AFG",
      car: { signs: ["AFG"], side: "right" },
      timezones: ["UTC+04:30"],
      continents: ["Asia"],
      flags: {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
        svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        alt: "The flag of the Islamic Emirate of Afghanistan has a white field with Arabic inscriptions — the Shahada — in black across its center.",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/af.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/af.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [34.52, 69.18] },
    },
  ];

  return (
    <div className="countryPage">
      <div className="countryHeader">
        <div className="countryHeaderLeft">
          <div className="countryHeaderLeftLogo">A</div>
          <div className="countryHeaderLeftText">
            <h3 className="countryHeaderName">{countries[0].name.common}</h3>
            <div className="countryHeaderCapital">{countries[0].capital}</div>
          </div>
        </div>
        <div className="countryHeaderRight">SS</div>
      </div>
      <div className="countryContent">
        {countries.map((country: Countries) => (
          <div className="countryContentFlag">
            <img className="countryContentImg" src={country.flags.svg} alt="" />
            <div className="countryContentInfo"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
