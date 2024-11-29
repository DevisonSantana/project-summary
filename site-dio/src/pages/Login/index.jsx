import Input from '../../components/Input'
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button';
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    function handleSignIn() {
        navigate('/feed')
    }
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form>
                            <Input placeholder="Email" leftIcon={<MdEmail />} />
                            <Input placeholder="Senha" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant='secondary' onClick={handleSignIn} />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>

        </>
    )
}

export default Login;