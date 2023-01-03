import { VStack, Heading } from 'native-base';

export function SignIn(){
    return(
        <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={24}>
            <Heading color="gray.100" mt={20} mb={6}>
                Seja bem vindo!
            </Heading>
        </VStack>
    );
}