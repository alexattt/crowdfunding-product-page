import React from 'react';

const ThanksModal = ({showThanksModal, setShowThanksModal}) => {

  return (
    <div className='thanks-modal-section flex-column'>
      {showThanksModal ? 
        <div className="thanks-modal-container flex-column">
          <img src="/icon-check.svg" alt="checkmark icon" className='checkmark-icon'/>
          <h3>Thanks for your support!</h3>
          <p className="modal-desc">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. 
            You will get an email once our campaign is completed.
          </p>
          <button className='got-it-btn' onClick={() => setShowThanksModal(false)}>Got it!</button>
        </div>
      : null
      }
    </div>
  )
}

export default ThanksModal
