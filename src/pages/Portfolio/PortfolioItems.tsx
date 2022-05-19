import item from  './portfolioItem';
import { PortfolioBox } from './styles';

export function PortfolioItems({ postsToRender }: any) {

  return(
    <PortfolioBox>
      {postsToRender.map((job:any, i:number) => (
                    <div key={i} >
                      <a href="#" >
                      <p className="itemTitle">{job.title}</p>
                      <img src={job.img} alt={job.title} />
                      </a>
                    </div>
        ))}
    </PortfolioBox>

  )
}