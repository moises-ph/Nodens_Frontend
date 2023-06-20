import { Offers } from '../../components';

const App = ({userName} : {userName : string}) => {
  return (
    <>
      <Offers userName={userName} />
    </>
  )
}

export default App 
