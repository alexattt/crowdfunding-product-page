import React from 'react';
import { useState } from 'react';

const Modal = ({pledgeType, setPledgeType, showModal, setShowModal, setShowThanksModal, moneyPledged, setMoneyPledged, backers, setBackers}) => {
  const [bambooPledgeAmount, setBambooPledgeAmount] = useState(25);
  const [blackEditionAmount, setBlackEditionAmount] = useState(75);

  let backersUpdated;
  let moneyPledgedUpdate;

  const closeModal = () => {
    setShowModal(false);
    setPledgeType('');
  }

  const handleChange = (event) => {
    setPledgeType(event.target.value)
  }

  const handleNoReward = () => {
    backersUpdated = backers + 1;
    setBackers(backersUpdated);
    setShowModal(false);
    setPledgeType('');
    setShowThanksModal(true);
  }

  const handleBambooPledge = () => {
    moneyPledgedUpdate = parseInt(moneyPledged) + parseInt(bambooPledgeAmount);
    backersUpdated = backers + 1;
    setBackers(backersUpdated);
    setMoneyPledged(moneyPledgedUpdate);
    setShowModal(false);
    setPledgeType('');
    setShowThanksModal(true);
  }

  const handleBlackEditionPledge = () => {
    moneyPledgedUpdate = parseInt(moneyPledged) + parseInt(blackEditionAmount);
    backersUpdated = backers + 1;
    setBackers(backersUpdated);
    setMoneyPledged(moneyPledgedUpdate);
    setShowModal(false);
    setPledgeType('');
    setShowThanksModal(true);
  }

  return (
    <div className='modal-section flex-column'>
      {showModal ?
        <div className='modal-container flex-column'>
          <img 
            src="/icon-close-modal.svg" alt="close modal" className='close-modal'
            onClick={closeModal}
          />
          <p className="modal-title">
            Back this project
          </p>
          <p className="modal-desc">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>
          <div className="pledges-container flex-column">
            <div className="pledge-option-container flex-column">
              <div className="top-part flex-row">
                <input type="radio" name="pledge-type" id="no-reward" value="no-reward" onChange={handleChange}/>
                <div className="top-part-info">
                  <p className="pledge-option-title">Pledge with no reward</p>
                  <p className="pledge-option-desc">
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                  </p>
                </div>
              </div>
              {pledgeType === 'no-reward' 
              ?
              <div>
                <hr />
                <div className="bottom-part flex-row">
                  <p className="enter-pledge"></p>
                  <button className="continue-btn" onClick={handleNoReward}>Continue</button>
                </div>
              </div>
              : null}
            </div>
            <div className="pledge-option-container flex-column">
              <div className="top-part flex-row">
                <input type="radio" name="pledge-type" id="bamboo-reward" value="bamboo-reward" onChange={handleChange}/>
                <div className="top-part-info">
                  <div className="pledge-details flex-row">
                    <p className="pledge-option-title">
                      Bamboo Stand
                    </p>
                    <p className="pledge-amount-info">
                      Pledge $25 or more
                    </p>
                    <p className="amount-left">
                      <span className='num-accent'>101</span> left
                    </p>
                  </div>
                  <p className="pledge-option-desc">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                  </p>
                  <p className="amount-left-mobile">
                    <span className='num-accent'>101</span> left
                  </p>
                </div>
              </div>
              {pledgeType === 'bamboo-reward' 
              ?
              <div>
                <hr />
                <div className="bottom-part flex-row">
                  <p className="enter-pledge">
                    Enter your pledge
                  </p>
                  <div className="pledge-amount-container flex-row">
                    <input type="number" min="25" max="200" step="0.01" 
                          placeholder="25" className='pledge-amount bamboo-pledge'
                          onChange={(event) => setBambooPledgeAmount(event.target.value)} />
                    <button className="continue-btn" onClick={handleBambooPledge}>Continue</button>
                  </div>
                </div>
              </div>
              : null}
            </div>
            <div className="pledge-option-container flex-column">
              <div className="top-part flex-row">
                <input type="radio" name="pledge-type" id="black-reward" value="black-edition" onChange={handleChange}/>
                <div className="top-part-info">
                  <div className="pledge-details flex-row">
                    <p className="pledge-option-title">
                      Black Edition Stand
                    </p>
                    <p className="pledge-amount-info">
                      Pledge $75 or more
                    </p>
                    <p className="amount-left">
                      <span className='num-accent'>64</span> left
                    </p>
                  </div>
                  <p className="pledge-option-desc">
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.
                  </p>
                  <p className="amount-left-mobile">
                    <span className='num-accent'>64</span> left
                  </p>
                </div>
              </div>
              {pledgeType === 'black-edition' 
              ?
              <div>
                <hr />
                <div className="bottom-part flex-row">
                  <p className="enter-pledge">
                    Enter your pledge
                  </p>
                  <div className="pledge-amount-container flex-row">
                    <input type="number" min="75" placeholder="75" className='pledge-amount black-pledge'
                      onChange={(event) => setBlackEditionAmount(event.target.value)} />
                    <button className="continue-btn" onClick={handleBlackEditionPledge}>Continue</button>
                  </div>
                </div>
              </div>
              : null}
            </div>
            <div className="pledge-option-container inactive-container flex-column">
              <div className="top-part flex-row">
                <input type="radio" name="pledge-type" id="mahogamy-reward" />
                <div className="top-part-info">
                  <div className="pledge-details flex-row">
                    <p className="pledge-option-title">
                      Mahogany Special Edition
                    </p>
                    <p className="pledge-amount-info">
                      Pledge $200 or more
                    </p>
                    <p className="amount-left">
                      <span className='num-accent'>0</span> left
                    </p>
                  </div>
                  <p className="pledge-option-desc">
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.
                  </p>
                  <p className="amount-left-mobile">
                    <span className='num-accent'>0</span> left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      : null}
    </div>
  )
}

export default Modal
