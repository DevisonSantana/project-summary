import Input from '../../components/Input'
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button';
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { IFormData } from './types';

function Login() {
    const navigate = useNavigate()
    function handleSignIn() {
        navigate('/feed')
    }
    const schema = yup.object(
        {
            email: yup.string().email('Email deve ser válido').required('Este campo é obrigatório'),
            password: yup.string().min(3, 'Minimo 3 caracteres').required('Este campo é obrigatório'),
        }
    ).required()

    const {control, handleSubmit, formState: {errors} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    const onSubmit = async (formData : IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.find((value:any)=> value.email === formData.email && value.password === formData.password)) {
                handleSignIn()
            } else {
                alert('Email ou senha incorretos')
            }
        } catch {
            alert('Houve um erro, tente novamente')
        }
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
                            <Input
                            control={control}
                            name="email"
                            placeholder="Email"
                            type="email"
                            errorMessage={errors?.email?.message}
                            leftIcon={<MdEmail />} />
                            
                            <Input
                            control={control}
                            name="password"
                            placeholder="Senha"
                            type="password"
                            errorMessage={errors?.password?.message}
                            leftIcon={<MdLock />} />

                            <Button
                            title="Entrar"
                            variant='secondary'
                            type="submit"
                            onClick={handleSubmit(onSubmit)} />
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