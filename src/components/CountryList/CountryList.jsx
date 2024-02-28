import styles from "./CountryList.module.css";
import CountryItem from "../CountryItem/CountryItem.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Message from "../Message/Message.jsx";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0) {
    console.log("Inside if");
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  const countries = []; // stores unique objects
  cities.forEach(city => {
    if (!countries.map(el => el.country).includes(city.country))
      countries.push(city);
  });

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
