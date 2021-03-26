import React from 'react';

import classes from './Page.module.css';

const page = ({ info }) => {
  const sectionInfo = info.blocks[0];
  return (
    <div className={classes.Page}>
      <div className={classes.Headers}>
        <div className={classes.Headline}>
          {sectionInfo.headline}
        </div>
        <div className={classes.Subhead}>
          {sectionInfo.subhead}
        </div>
      </div>
      <div className={classes.CallToAction}>
        <div className="cta">{sectionInfo.cta}</div>
      </div>
    </div>
  );
};
  

export default page;