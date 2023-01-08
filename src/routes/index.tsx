import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn";

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function Routes(){
    const [loading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(response => {
    //         setUser(response);
    //         setIsLoading(false);
    //     })

    //     return subscriber;
    // }, []);
    

    return(
        <NavigationContainer>
            {/* {user ? <AppRoutes /> : <SignIn />} */}
            <AppRoutes />
        </NavigationContainer>
    );
}