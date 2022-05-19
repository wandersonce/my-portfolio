import React, {useState, useEffect} from 'react';
import { GitWrapper } from './styles';

interface Repository{
  id: number;
  name: string;
  description: string;
  html_url: string;
}

function GitInformation() {
  const [repositories, setRepositories] = useState<Repository[]>([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/wandersonce/repos') 
      .then((response) => response.json()) 
      .then((data) => setRepositories(data));
  }, []);

  return (
    <GitWrapper>
      {repositories.map((repository) => {
        return (
          <div key={repository.id}>
            <h3>{repository.name}</h3>
            <p>{repository.description}</p>
          </div>
        );
      })}

    </GitWrapper>
  )
}

export default GitInformation