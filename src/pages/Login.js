import { Box, Button, Group, Loader, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { token } from "../api/token";
import { useMutation } from '@tanstack/react-query';
import { useSignIn } from 'react-auth-kit';

const Login = () => {
    const navigate = useNavigate();
    const login = useSignIn();

    const form = useForm({
        initialValues: { username: '', password: '' },
        validate: {
            username: (value) => (value.length < 4 ? 'Invalid username' : null),
            password: (value) => (value.length < 4 ? 'Invalid password' : null)
        },
    });
    
    const tokenMutation = useMutation({
        mutationFn: (loginData) => {
            return token(loginData)
        },
        onSuccess: (data)=>{
            login({
                token: data.data.access,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: {username: form.values.username}
            })

            notifications.show({
                title: 'User',
                message: JSON.stringify(data.data),
            });
            
            navigate('/');
        },
        onError: () => {
            notifications.show({
                title: 'User',
                message: 'Invalid username or password',
            })
        }
    })


  return (
    <Group h="100vh"
    sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark'? "black":theme.colors.pink[5]
    })}
    >
        <Box miw="30vw" mx="auto" bg="#fff"
        sx={(theme) => ({
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        })}
        >
            <form onSubmit={form.onSubmit((values)=>{
                console.log(values);

                const loginData = {
                    username: values.username,
                    password: values.password
                }

                tokenMutation.mutate(loginData);
            })}>
                <Text fs="italic" fw="bold" fz="xl" ta="center" c="blue">LOGIN</Text>
                <TextInput mt="md" withAsterisk label="Username" {...form.getInputProps("username")} />
                <PasswordInput mt="md" withAsterisk label="Password" {...form.getInputProps("password")} />
                <Group position="right" mt="md">
                    {
                        tokenMutation.isLoading
                        ?
                        <Loader variant="dots" />
                        :
                        <Button color='blue' type="submit">Register</Button>
                    }
                </Group>
            </form>
        </Box>
    </Group>
  )
}

export default Login
