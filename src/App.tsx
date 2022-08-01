import { useState, useEffect } from 'react';
interface Repo {
  name: string,
  description: string
}
function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('https://api.github.com/users/Mati-Pereira/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])
  const filteredRepos = search.length > 0 ?
    repos.filter(repo => repo.name.toLowerCase().includes(search.toLowerCase())) :
    repos;
  return (
    <div>
      <input type="text" name='search' onChange={e => setSearch(e.target.value)} value={search} />
      <ul>
        {filteredRepos.map((repo, index) => {
          return <li key={index}>{repo.name}</li>
        })}
      </ul>
    </div>
  );
}
export default App;