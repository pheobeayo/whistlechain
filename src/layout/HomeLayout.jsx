import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet} from 'react-router-dom'


const HomeLayout = () => {
  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout