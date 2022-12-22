
import './App.css'
import SwiperSection from './components/SwiperSection/index'
import TextSection from './components/TextSection/index'
import bg from './assets/images/bg.png'
function App() {

  return (
     <div className='main'>
           <img src={bg} alt='stockPhoto' className="image" />
            <div className='product product-detail'>
                 <TextSection/>
                 <SwiperSection/>
            </div>
        </div>
  )
}

export default App


