import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import {
  Container,
  Wrapper,
  Input,
  AccessYourAccount,
  Label,
  SubmitButton,
  ForgotPasswordText,
} from './styles';

import { useAuth } from '../../contexts/Auth/AuthContext';

export const Login = function() {
  const navigate = useNavigate();

  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      return navigate(`/`);
    }
  }, [user, navigate]);

  const schema = yup.object().shape({
    userLogin: yup.string().email('E-mail inválido').required('Email é obrigatório'),
    userPassword: yup.string().min(6, 'Senha inválida').required('Senha é obrigatória'),
  });
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ userLogin, userPassword }) => {
    const response = await login({ userLogin, userPassword });
    if (!response) return alert(`Usuário ou senha inválidos`);

    navigate(`/dashboard`);
  };

  return (
    <>
      {!user && (
        <Container>
          <Wrapper>
            <AccessYourAccount>Acesse sua conta</AccessYourAccount>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor='userLogin'>E-mail</Label>
                <Input
                  type='text'
                  id='userLogin'
                  placeholder='Seu e-mail'
                  autoComplete='off'
                  {...register('userLogin')}
                />
                {errors.userLogin && <p style={{ fontSize: 14, color: 'red', marginBottom: 10 }}>{errors.userLogin.message}</p>}
              </div>

              <div>
                <Label htmlFor='userPassword'>Senha</Label>
                <Input
                  type='password'
                  id='userPassword'
                  placeholder='Sua senha'
                  autoComplete='off'
                  {...register('userPassword')}
                />
                {errors.userPassword && <p style={{ fontSize: 14, color: 'red', marginBottom: 10 }}>{errors.userPassword.message}</p>}
              </div>

              <ForgotPasswordText href='#'>Esqueci minha senha</ForgotPasswordText>

              <div>
                <SubmitButton>Entrar</SubmitButton>
              </div>
            </form>
          </Wrapper>
        </Container>
      )}
    </>
  );
}
