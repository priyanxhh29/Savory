import RestaurantCard from "../components/RestaurantCard.js";
import { useState } from "react";
import Shimmer from "../components/Shimmer.js"; 
import { Link } from "react-router-dom";
import useResData from "../hooks/useResData.js"; 
import useOnline from "../hooks/useOnline.js"; 
import UserOffline from "../components/UserOffline.js";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData();
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();
  
  if (!isOnline) {
    return <UserOffline />;
  }


  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = restaurants.filter((restaurant)=>{
        return    restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase());
      });
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  if (!allRestaurants) return null;
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search a restaurant you want..." value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >Search </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (<Shimmer />) : (
        <div className="restaurant-list">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => { 
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                ><RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;