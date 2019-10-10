import React, { Fragment } from 'react';
import Box from './Box';
import DescriptionBlock from './DescriptionBlock';
import SmallBox from './Smallbox';
import PageHeader from './PageHeader';
import ProgressBar from './ProgressBar';
import Card from './Card';
import Row from './Row';
import {
  faUsers,
  faPaintBrush,
  faShoppingBag,
  faSmile
} from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {

  return (
    <Fragment>
      <PageHeader pageTitle='Dashboard' />
      <section className='content'>
        <div className='container-fluid'>
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

        </div>
      </section>
    </Fragment>
  );
};

export default DashboardPage;
