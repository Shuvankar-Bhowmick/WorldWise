import styles from "./CityList.module.css";
import CityItem from "../CityItem/CityItem.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Message from "../Message/Message.jsx";

function CityList({ cities, isLoading }) {
  console.log("isLoading: " + isLoading);
  console.log(cities.length);

  if (isLoading) return <Spinner />;

  if (cities.length === 0) {
    console.log("Inside if");
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
