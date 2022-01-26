import React from 'react';

const AboutSection = ({setShowModal, setPledgeType}) => {

  const toggleModal = (pledgeType) => {
    setPledgeType(pledgeType);
    setShowModal(true);
  }

  return (
    <div className='about-section flex-column'>
      <h3>About this project</h3>
      <p className="about-desc">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        <br/>
        <br/>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>
      <div className="reward-containers flex-column">
        <div className="reward-container flex-column">
          <div className="header-container flex-row">
            <h4>Bamboo Stand</h4>
            <p className="pledge-amount">Pledge $25 or more</p>
          </div>
          <p className="pledge-desc">
            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
            you’ll be added to a special Backer member list.
          </p>
          <div className="footer-container flex-row">
            <p className="amount-left flex-row">
              <span className='left-accent'>101</span> left
            </p>
            <button className="select-reward-btn" onClick={() => toggleModal('bamboo-reward')}>
              Select Reward
            </button>
          </div>
        </div>
        <div className="reward-container flex-column">
          <div className="header-container flex-row">
            <h4>Black Edition Stand</h4>
            <p className="pledge-amount">Pledge $75 or more</p>
          </div>
          <p className="pledge-desc">
            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
            member list. Shipping is included.
          </p>
          <div className="footer-container flex-row">
            <p className="amount-left flex-row">
              <span className='left-accent'>64</span> left
            </p>
            <button className="select-reward-btn" onClick={() => toggleModal('black-edition')}>
              Select Reward
            </button>
          </div>
        </div>
        <div className="reward-container inactive-container flex-column">
          <div className="header-container flex-row">
            <h4>Mahogany Special Edition</h4>
            <p className="pledge-amount">Pledge $200 or more</p>
          </div>
          <p className="pledge-desc">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
            to our Backer member list. Shipping is included.
          </p>
          <div className="footer-container flex-row">
            <p className="amount-left flex-row">
              <span className='left-accent'>0</span> left
            </p>
            <button className="select-reward-btn">
              Select Reward
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
