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

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";

const windowWidth = Dimensions.get('window').width;

const SIZE = (windowWidth - 112)/4;

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
      <Pressable onPress={handleCryptoLogin} style={styles.enter}>
        <FontAwesomeIcon icon={faCreditCard} color={'#0054DBCB'} size={SIZE/3} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Root')} style={styles.Enter}>
        <FontAwesomeIcon icon={faStepForward} color={'#0054DBCB'} size={SIZE/3} />
      </Pressable>
    </View>
  );
};
export default AuthenticateUser;

const styles = StyleSheet.create({
  enter: {
    backgroundColor: '#bfe6d4',
    borderRadius: 16,
    height: 96,
    width: 96,
    position: 'absolute',
    bottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
    left: 64,
  },
  Enter: {
    backgroundColor: '#fffb91',
    borderRadius: 16,
    height: 96,
    width: 96,
    position: 'absolute',
    bottom: 32,
    right: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
