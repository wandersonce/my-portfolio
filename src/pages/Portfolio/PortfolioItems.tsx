import React, { useRef, useEffect } from 'react'

import item from  './portfolioItem';
import { PortfolioBox } from './styles'

export function PortfolioItems() {
  
  return(
    <PortfolioBox>
      {item.map((job, i) => (
                    <div key={i} >
                      <p>{job.title}</p>
                      <p>{job.description}</p>
                    </div>
        ))}
    </PortfolioBox>
  )
}