import { useSelector } from "react-redux/es/exports"
import { RootState } from "./store/store"

function App() {
  const Router = useSelector(
    (state: RootState) => state.Router.router
  );
  return (
    <>
      <Router />
    </>
  )
}

export default App
