import React, { useState, createRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Pressable,
} from "react-native";

import {
  useMoralis,
} from "react-moralis";
import { useWalletConnect } from "../../WalletConnect";


const AuthenticateUser = ({ navigation }) => {
  const connector = useWalletConnect();
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const passwordInputRef = createRef();

  const handleCryptoLogin = () => {
    authenticate({ connector })
      .then(() => {
        if (authError) {
          setErrortext(authError.message);
          setVisible(true);
        } else {
          if (isAuthenticated) {
            navigation.replace("DrawerNavigationRoutes");
          }
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    isAuthenticated && navigation.replace("DrawerNavigationRoutes");
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleCryptoLogin} style={styles.enter} />
    </View>
  );
};
export default AuthenticateUser;

const styles = StyleSheet.create({
  enter: {
    backgroundColor: '#000000',
    borderRadius: 16,
    height: 128,
    width: 128,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
  },
});
