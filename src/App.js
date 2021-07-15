import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

import Header from "./Components/Header/Header";
import RestaurantInfos from "./Components/RestaurantInfos/RestaurantInfos";
import Menu from "./Components/Menu/Menu";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-manu.herokuapp.com/"
    );

    setData(response.data);

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        "chargement en cours"
      ) : (
        <>
          <Header />
          <RestaurantInfos
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <div className="content">
            <Menu categories={data.categories} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
