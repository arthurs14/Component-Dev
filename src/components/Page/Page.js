import React from 'react';

const page = ({ info }) => {
  const sectionInfo = info.blocks[0];
  return (
    <div className="page">
      <div className="headline">
        <h2>{sectionInfo.headline}</h2>
      </div>
      <div className="subhead">
        <h5>{sectionInfo.subhead}</h5>
      </div>
      <div className="call-to-action">
        <div className="cta">{sectionInfo.cta}</div>
      </div>
    </div>
  );
};
  

export default page;