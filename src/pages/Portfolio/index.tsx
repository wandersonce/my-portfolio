import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { PortfolioItems } from './PortfolioItems';

import item from  './portfolioItem';

import {Container} from './styles';

const postsPerPage= 8;
let arrayForHoldingPosts:any = [];

export function Portfolio() {

  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(8);
  const [buttonVisible, setButtonVisible] = useState(true);

  const loopWithSlice = (start:number,end:number) => {
    const slicedPosts = item.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    console.log(slicedPosts, arrayForHoldingPosts)
    if(slicedPosts.length <= 4 && arrayForHoldingPosts.length >= 9){
      console.log('here');
      setButtonVisible(false);
    }
    setPostsToShow(arrayForHoldingPosts);
  };
  
  useEffect(() => {
    arrayForHoldingPosts = [];
    loopWithSlice(0, postsPerPage);
  }, []);
  
  useEffect(() => {
    console.log(buttonVisible);
  }, [buttonVisible]);

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
      
      {buttonVisible ? <button onClick={handleShowMorePosts}>Load more</button> : ' '}

      </Container>
    
    </motion.div>
  )
}