import { useSelector } from "react-redux/es/exports"
import { AppMusicianRouter, InitialRouter, AppOrganizerRouter } from "./Routers";
import { RootState } from "./store/store"

function App() {
  const RouterBoolean = useSelector(
    (state: RootState) => state.Router.router
  );
  const Router = RouterBoolean ? AppOrganizerRouter : InitialRouter
  return (
    <>
      <Router />
    </>
  )
}

export default App
