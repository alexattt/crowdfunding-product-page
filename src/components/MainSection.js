import React from 'react';
import CompanyHeader from './CompanyHeader';
import BackingStats from './BackingStats';
import AboutSection from './AboutSection';

const MainSection = ({showModal, setShowModal, moneyPledged, backers, setPledgeType}) => {

  return (
    <div className='main-section flex-column'>
      <CompanyHeader showModal={showModal} setShowModal={setShowModal}/>
      <BackingStats moneyPledged={moneyPledged} backers={backers}/>
      <AboutSection setShowModal={setShowModal} setPledgeType={setPledgeType}/>
    </div>
  )
}

export default MainSection
