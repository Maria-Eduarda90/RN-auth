import { VStack, Text} from 'native-base';

export function Home(){
    return(
        <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={24}>
            <Text>Home</Text>
        </VStack>
    );
}