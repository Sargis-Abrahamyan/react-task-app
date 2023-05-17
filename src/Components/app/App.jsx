import { useEffect } from 'react'
import axios from 'axios';
// context
import { useGlobalContext } from '../../context/context';
// components
import Header from '../header/Header';
import NavBar from '../navbar/NavBar';
import Cards from '../cards/Cards';

function App() {
  const { data, setData, showSideBar, handelShowBar } = useGlobalContext();

  useEffect(() => {
    const get_data = async () => {
      try {
        const { data } = await axios.get('https://cloud.codesupply.co/endpoint/react/data.json')
        setData(data)
      }
      catch (error) {
        console.log(error);
      }
    }
    get_data()
  }, []);

  return (
    <>
      {showSideBar && <div onClick={handelShowBar} className="blur"></div>}
      <Header />
      <NavBar />
      <Cards data={data} />
    </>
  )
}
export default App