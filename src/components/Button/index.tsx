import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props){
    return(
        <ButtonNativeBase
         bg="primary.700"
         h={14}
         fontSize="sm"
         rounded="sm"
         _pressed={{
            bg: "primary.800"
         }}
         {...rest}
        >
            <Heading color="white" fontSize="md">{title}</Heading>
        </ButtonNativeBase>
    );
}