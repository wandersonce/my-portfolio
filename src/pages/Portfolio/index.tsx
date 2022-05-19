import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { PortfolioItems } from './PortfolioItems';

import item from  './portfolioItem';

import {Container} from './styles';

const postsPerPage= 4;
let arrayForHoldingPosts:any = [];

export function Portfolio() {

  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(4);

  const loopWithSlice = (start:number,end:number) => {
    const slicedPosts = item.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return(
    <motion.div 
    className="center-container"
    initial={{ opacity: 0 }}
    animate={{opacity:1}}
    exit={{ opacity: 0 }}
    >
      <Container>
        <div>
          <h2>PORFOLIO</h2>
          <p>My Work</p>
        </div>

      <PortfolioItems postsToRender={postsToShow} />
          <button onClick={handleShowMorePosts}>Load more</button>
      </Container>
    
    </motion.div>
  )
}