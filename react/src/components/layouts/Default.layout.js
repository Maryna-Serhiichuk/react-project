import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const DefaultLayout = () => {
    return (
        <div className='app'>
          <div className='navigation'>
            <Navigation />
          </div>
          <div className='content'>
            <Outlet />
          </div>
        </div>
    );
}

export default DefaultLayout