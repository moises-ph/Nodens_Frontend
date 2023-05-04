import { useSelector } from "react-redux/es/exports";
import { RootState } from "./store/store";
import * as jose from 'jose';
import {lazily} from 'react-lazily'
import { Suspense } from "react";
import { Loading } from "./components";

const {AppMusicianRouter, InitialRouter, AppOrganizerRouter} = lazily(()=> import('./Routers'))

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
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </>
  )
}

export default App
