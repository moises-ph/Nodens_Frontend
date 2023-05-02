import { useSelector } from "react-redux/es/exports";
import { AppMusicianRouter, InitialRouter, AppOrganizerRouter } from "./Routers";
import { RootState } from "./store/store";
import * as jose from 'jose';

function App() {
  const RouterBoolean = useSelector(
    (state: RootState) => state.Router.router
  );

  const checkRole = () => {
    const token = localStorage.getItem("authTokenForTheUser");
    const decodedToken = jose.decodeJwt(token!);
    if(decodedToken.Role == 'Musician'){
      return AppMusicianRouter
    } else {
      return AppOrganizerRouter
    }
  }
  const Router = RouterBoolean ? checkRole() : InitialRouter 
  return (
    <>
      <Router />
    </>
  )
}

export default App
