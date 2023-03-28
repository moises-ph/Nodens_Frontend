import { useSelector } from "react-redux/es/exports"
import { AppRouter, InitialRouter, RegisterRouter } from "./Routers";
import { RootState } from "./store/store"

function App() {
  const RouterBoolean = useSelector(
    (state: RootState) => state.Router.router
  );
  const Router = RouterBoolean ? RegisterRouter : InitialRouter
  return (
    <>
      <Router />
    </>
  )
}

export default App
