import Input from '../../components/Input'
import { Column, Container, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { IRegister } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().min(3).required()
    })
    
    const { control, handleSubmit } = useForm<IRegister>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const navigate = useNavigate()

    const onSubmit = async (formData : IRegister) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.find((value:any) => value.email === formData.email)) {
                alert('Este e-mail já está em uso')
            } else {
                api.post(
                    "http://localhost:8001/users",
                    {
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                    }
                )
                alert('Conta criada com sucesso')
                navigate('/login')
            }
            
        } catch {
            alert('Houve um problema, tente mais tarde')
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
                            placeholder="Nome completo" 
                            leftIcon={<MdPerson />} 
                            name='name' 
                            control={control} />

                            <Input 
                            placeholder="Email" 
                            leftIcon={<MdEmail />}
                            name='email'
                            type='email'
                            control={control} />

                            <Input 
                            placeholder="Senha"
                            leftIcon={<MdLock />}
                            name='password'
                            type='password'
                            control={control} />

                            <Button
                            title="Criar Conta"
                            variant='secondary'
                            type='submit'
                            onClick={handleSubmit(onSubmit)} />
                        </form>
                    </Wrapper>
                </Column>
            </Container>

        </>
    )
}

export default Register;