import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components/export";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covidImage from "../src/assets/images/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChanges = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={covidImage} className={styles.covidImage} alt="covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChanges={this.handleCountryChanges} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
