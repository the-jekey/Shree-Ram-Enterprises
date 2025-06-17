import React from 'react'

const GrainyFilter = () => (
       <svg style={{ display: 'none' }}>
              <filter id="grainy">
                     <feTurbulence type="turbulence" baseFrequency="1" />
                     <feColorMatrix type="saturate" values="0" />
              </filter>
       </svg>
);

export default GrainyFilter
