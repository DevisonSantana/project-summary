import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, TextContent, Title, TitleHighlight } from './styles';
import bannerImage from '../../assets/banner.png'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    function handleSignIn() {
        navigate('/login')
    }
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br/>
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant='secondary' onClick={handleSignIn} type="button" />
                </div>
                <div>
                    <img src={bannerImage} alt='Imagem principal do site' />
                </div>
            </Container>
        </>
    )
}

export default Home;