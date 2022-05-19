import React, {useState, useEffect} from 'react';
import { GitWrapper } from './styles';

interface Repository{
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

function GitInformation() {
  const [repositories, setRepositories] = useState<Repository[]>([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/wandersonce/repos?per_page=100') 
      .then((response) => response.json()) 
      .then((data) => setRepositories(data));
  }, []);

  return (
    <GitWrapper>
      {repositories.map((repository, index) => {
        return (
          <div key={repository.id} >
            <a href={repository.html_url} target="_blank" rel="noreferrer">
            <h3>{index+1}. {repository.name}</h3>

            {repository.description ? <p>{repository.description}</p> : null}

            {repository.language ? <p>Language: {repository.language}</p> : null}
            </a>
          </div>
        );
      })}

    </GitWrapper>
  )
}

export default GitInformation