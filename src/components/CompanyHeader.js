import React from 'react';
import { useState } from 'react';

const CompanyHeader = ({showModal, setShowModal}) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className='company-header flex-column'>
      <img src="/logo-mastercraft.svg" alt="mastercraft logo" className="company-logo" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p className="product-desc">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="action-btns flex-row">
        <button className="back-project-btn" onClick={toggleModal}>
          Back this project
        </button>
        <div className="bookmark-btn-container flex-row">
          <img src={bookmarked ? "/icon-bookmarked.svg" : "/icon-bookmark.svg"} 
            alt="bookmark icon" 
            className='bookmark-icon'
            onClick={toggleBookmark}/>
          <button className={bookmarked ? "bookmarked-btn" : "bookmark-btn"} 
            onClick={toggleBookmark}>
              {bookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompanyHeader
