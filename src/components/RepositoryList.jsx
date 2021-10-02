import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'


const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'

}

export function RepositoryList() {

  useEffect(() => {
    fetch('https://api.github.com/users/g-santosmartins/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))

  }, [])

  const [repositories, setRepositories] = useState([]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/> 
        })}
      </ul>

    </section>
  )
}