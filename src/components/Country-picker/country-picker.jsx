import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./country-picker.module.css";
import { fetchCountriesData } from "../../api";

const CountryPicker = ({ handleCountryChanges }) => {
  const [dataCountry, setDataCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedAPI = await fetchCountriesData();

      setDataCountry(fetchedAPI);
    };

    fetchAPI();
  }, [setDataCountry]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChanges(e.target.value)}
      >
        <option value="">Global</option>
        {dataCountry.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
