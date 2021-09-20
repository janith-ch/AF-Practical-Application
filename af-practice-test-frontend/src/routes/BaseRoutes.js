/** @format */
import { Switch, Route } from "react-router-dom";
import AddCategory from "../pages/AddCategory";
import AddVehicle from "../pages/AddVehicle";
import CategoryList from "../pages/CategoryList";
import Home from "../pages/Home";
import VehicleList from "../pages/VehicleList";
import VehicleStatus from "../pages/VehicleStatus";

const BaseRoute = () => {
  return (
    <Switch>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Home>
            <Route path={url} component={VehicleList} exact />
            <Route path={`${url}/vehicle-list`} component={VehicleList} />
            <Route path={`${url}/vehicle-add`} component={AddVehicle} />
            <Route path={`${url}/category-list`} component={CategoryList} />
            <Route path={`${url}/category-add`} component={AddCategory} />
            <Route
              path={`${url}/category-list-status/:id`}
              component={VehicleStatus}
            />
          </Home>
        )}
      ></Route>
    </Switch>
  );
};
export default BaseRoute;
