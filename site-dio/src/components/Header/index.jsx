import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles'
import logo from '../../assets/logo-dio.png'
import Button from '../Button';

function Header({auth}) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    {auth ? (
                        <>
                            <img src={logo} alt='logo da DIO' />
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {auth ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/145402199?v=4' />
                    ) : (
                        <>
                            <MenuRight href='/'>Home</MenuRight>
                            <Button title='Entrar' />
                            <Button title='Cadastrar' />
                        </>

                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header;