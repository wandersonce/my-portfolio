import item from  './portfolioItem';
import { PortfolioBox } from './styles';

export function PortfolioItems({ postsToRender }: any) {

  return(
    <PortfolioBox>
      {postsToRender.map((job:any, i:number) => (
                    <div key={i} >
                      <a target="_blank" href={job.website} rel="noreferrer" >
                        <div className="titleWrapper">
                          <p className="itemTitle">{job.title}</p>
                        </div>
                      <img src={job.img} alt={job.title} />
                      </a>
                    </div>
        ))}
    </PortfolioBox>

  )
}