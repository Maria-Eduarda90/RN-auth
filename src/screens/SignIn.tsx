import { VStack, Heading, Text, Icon } from 'native-base';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn(){
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
            />
            <Input
             mb={10}
             placeholder="*************"
             InputLeftElement={<Icon as={<SimpleLineIcons name="lock" />} ml={4} size={6} />}
             secureTextEntry
            />

            <Button title="Entrar" w="full" />
        </VStack>
    );
}