import React from 'react';
import './Loader.css';

export default function LoadingDots() {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
