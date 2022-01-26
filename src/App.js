import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Modal from './components/Modal';
import ThanksModal from './components/ThanksModal';
import './css/styles.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pledgeType, setPledgeType] = useState('');
  const [showThanksModal, setShowThanksModal] = useState(false);
  const [moneyPledged, setMoneyPledged] = useState(89914);
  const [backers, setBackers] = useState(5007);

  return (
    <div className='main-container flex-column'>
      <Header 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MainSection 
        showModal={showModal} 
        setShowModal={setShowModal}
        moneyPledged={moneyPledged}
        backers={backers}
        setPledgeType={setPledgeType}
      />
      <Modal 
        pledgeType={pledgeType}
        setPledgeType={setPledgeType}
        showModal={showModal} 
        setShowModal={setShowModal}
        setShowThanksModal={setShowThanksModal}
        moneyPledged={moneyPledged}
        setMoneyPledged={setMoneyPledged}
        backers={backers}
        setBackers={setBackers}
      />
      <ThanksModal 
        showThanksModal={showThanksModal}
        setShowThanksModal={setShowThanksModal}
      />
    </div>
  )
}

export default App