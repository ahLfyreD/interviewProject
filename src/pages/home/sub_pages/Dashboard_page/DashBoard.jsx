import TopComponent from './dashboard_components/TopComponent';
import ProductDataComponent from './dashboard_components/ProductDataComponent';
import CustomerDataComponent from './dashboard_components/CustomerDataComponent';
import ChartDataComponent from './dashboard_components/ChartDataComponent';

import './DashBoard.css'


const DashBoard = () => {

  return (
    <div className='dashboard_container'>
      <TopComponent />
      <div className='second_container'>
        <div className='chart_container'>
          <div className='chart_first_box'>
            <div className='content_box'>


            </div>
            <div className='beside_container'>
              <ProductDataComponent />
              <CustomerDataComponent />
            </div>
          </div>
          <ChartDataComponent />
        </div>
        <div className='recent_order_container'>

        </div>
      </div>

    </div>
  )
}

export default DashBoard
