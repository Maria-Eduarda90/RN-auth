import { VStack, Heading, Text, Icon } from 'native-base';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';

export function SignIn({ navigation }){
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();

    function openScreen(){
        navigation.navigate('signup');
    }

    function handleSignIn(){
        console.log(name, password);
    }

    return(
        <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={24}>
            <Heading color="gray.100" mt={20} mb={4}>
                Seja bem vindo!
            </Heading>
            <Text color="gray.400" fontSize="xl" mb={12}>Faça login e comece a usar</Text>

            <Input
             placeholder="teste@example.com"
             mb={4}
             InputLeftElement={<Icon as={<MaterialCommunityIcons name="email-outline"/>} ml={4} size={6}/>}
             onChangeText={setName}
            />
            <Input
             mb={10}
             placeholder="*************"
             InputLeftElement={<Icon as={<SimpleLineIcons name="lock" />} ml={4} size={6} />}
             secureTextEntry
             onChangeText={setPassword}
            />

            <Button title="Entrar" w="full" onPress={handleSignIn}/>

            <Heading color="gray.100" fontSize="sm" mt={8}>Ainda não possui uma conta? <Text onPress={openScreen}> cadastre-se</Text></Heading>
        </VStack>
    );
}