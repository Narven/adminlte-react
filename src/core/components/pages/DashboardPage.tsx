import React  from 'react'
import Page from '../widgets/Page'
import SmallBox from '../widgets/Smallbox'
import {
  faUsers,
  faPaintBrush,
  faShoppingBag,
  faSmile
} from '@fortawesome/free-solid-svg-icons'

const DashboardPage = () => {

  return (
    <Page title={'Dashboard'}>
      <div className={'row'}>
        <div className='col-6 col-md-3 col-xs-6'>
          <SmallBox
            danger={true}
            icon={faSmile}
            subtitle={'Total Events'}
            title={439439}
          />
        </div>

        <div className='col-lg-3 col-xs-6'>
          <SmallBox
            subtitle={'Total Businnesses'}
            icon={faShoppingBag}
            title={312}
            warning
          />
        </div>


        <div className='col-lg-3 col-xs-6'>
          <SmallBox
            subtitle={'Total Artists'}
            icon={faPaintBrush}
            title={200}
            success
          />
        </div>
        <div className='col-lg-3 col-xs-6'>
          <SmallBox
            subtitle={'Total Users'}
            icon={faUsers}
            title={101}
            primary
          />
        </div>
      </div>
    </Page>
  )
}

export default DashboardPage
