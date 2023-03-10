import { VStack, Heading, Text, Icon } from 'native-base';
import { SimpleLineIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';

export function SignUp({ navigation }){
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    function openScreen() {
        navigation.navigate('signin');
    }

    function handleSignUp(){

    }

    return(
        <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={24}>
            <Heading color="gray.100" mt={20} mb={4}>
                Seja bem vindo!
            </Heading>
            <Text color="gray.400" fontSize="xl" mb={12}>Crie uma conta e comece a usar</Text>

            <Input
                mb={4}
                placeholder="Nome completo"
                InputLeftElement={<Icon as={<AntDesign name="user" />} ml={4} size={6} />}
                secureTextEntry
                onChangeText={setName}
            />

            <Input
                placeholder="teste@example.com"
                mb={4}
                InputLeftElement={<Icon as={<MaterialCommunityIcons name="email-outline" />} ml={4} size={6} />}
                onChangeText={setEmail}
            />

            <Input
                mb={4}
                placeholder="*************"
                InputLeftElement={<Icon as={<SimpleLineIcons name="lock" />} ml={4} size={6} />}
                secureTextEntry
                onChangeText={setPassword}
            />

            <Input
                mb={10}
                placeholder="Confirmar senha"
                InputLeftElement={<Icon as={<SimpleLineIcons name="lock" />} ml={4} size={6} />}
                secureTextEntry
            />

            <Button title="Cadastrar" w="full" onPress={handleSignUp}/>

            <Heading color="gray.100" fontSize="sm" mt={8}>Já possui uma conta? <Text onPress={openScreen}> login</Text></Heading>
        </VStack>
    );
}