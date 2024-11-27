import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import API from '../services/api';

function App() {
  const [currentRepository, setCurrentRepository] = useState('')
  const [repository, setRepository] = useState([])

  async function handleSearchRepo() {
     try {
      const {data} = await API.get(`repos/${currentRepository}`)
      if (data.id) {
        const isExist = repository.find(repo => repo.id === data.id)
        if (!isExist) {
          setRepository(prev => [...prev, data])
          setCurrentRepository('')
        }
      }
    } catch (err) {
      console.error("Não encontrado");
    }
  }
  function hanldeRemoveRepo(repoID) {
    setRepository(repository.filter(
      repo => repo.id !== repoID
    ))
  }
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='logo github' />
      <Input value={currentRepository} onChange={(e) => setCurrentRepository(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repository.map(repo => <ItemRepo removeRepo={hanldeRemoveRepo} repository={repo} />)}
    </Container>
  );
}

export default App;
