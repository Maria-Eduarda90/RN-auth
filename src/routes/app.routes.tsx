import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signin" component={SignIn} />
            <Screen name="signup" component={SignUp} />
            <Screen name="home" component={Home} />
        </Navigator>
    );
}