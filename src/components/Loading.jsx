import React from 'react';
import loadingSvg from "../assets/svg/loading.svg";

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img className='h-14' src={loadingSvg} alt="Loading..." />
    </div>
  )
}
