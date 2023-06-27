import React from 'react'
import { Button, Box, MantineProvider, Text, TextInput, PasswordInput, Group } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const form = useForm({
      initialValues: { firstName: '', email: '', password: '', confirmPassword: '' },
      validate: {
        firstName: hasLength({ min: 2, max: 20 }, 'Name must be 2-20 characters long'),
        email: isEmail('Invalid email'),
        password: (value) => (value.length < 6 ? 'Password must have at least 6 letters' : null),
        confirmPassword: (value) => (value === '' || form.getInputProps("password").value !== value?"Confirm password must match with password":null)
      },
    });

    const navigate = useNavigate();
  
    return (
      <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS
      theme={{
        colorScheme: 'light',
        colors: {
          'blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        }
      }}
      >
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
                navigate('/');
              })}>
                <Text fs="italic" fw="bold" fz="xl" ta="center" c="blue">REGISTER</Text>
                <TextInput mt="md" withAsterisk label="First Name" {...form.getInputProps("firstName")} />
                <TextInput mt="md" withAsterisk label="Email address" {...form.getInputProps("email")} />
                <PasswordInput mt="md" withAsterisk label="Password" {...form.getInputProps("password")} />
                <PasswordInput mt="md" withAsterisk label="Confirm password" {...form.getInputProps("confirmPassword")} />
                <Group position="right" mt="md">
                  <Button color='blue' type="submit">Register</Button>
                </Group>
              </form>
          </Box>
        </Group>
      </MantineProvider>
    )
}

export default Register
