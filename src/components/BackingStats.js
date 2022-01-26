import React from 'react';
import ProgressBar from './ProgressBar';

const BackingStats = ({moneyPledged, backers}) => {
  let progress = (100*moneyPledged)/100000;

  return (
    <div className='stats-container flex-column'>
      <div className="numerical-stats flex-row">
        <div className="individual-stats flex-column">
          <p className="num-val">
            ${moneyPledged.toLocaleString()}
          </p>
          <p className="stat-desc">
            of $100,000 backed
          </p>
        </div>
        <hr />
        <div className="individual-stats flex-column">
          <p className="num-val">
            {backers.toLocaleString()}
          </p>
          <p className="stat-desc">
            total backers
          </p>
        </div>
        <hr />
        <div className="individual-stats flex-column">
          <p className="num-val">
            56
          </p>
          <p className="stat-desc">
            days left
          </p>
        </div>
      </div>
      <ProgressBar progress={progress}/>
    </div>
  )
}

export default BackingStats
