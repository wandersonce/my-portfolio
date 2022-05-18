import item from  './portfolioItem';
import { PortfolioBox } from './styles'

export function PortfolioItems() {
  
  return(
    <PortfolioBox>
      {item.map((job, i) => (
                    <div key={i} >
                      <a href="#" >
                      <p>{job.title}</p>
                      <img src={job.img} alt={job.title} />
                      </a>
                    </div>
        ))}
    </PortfolioBox>
  )
}