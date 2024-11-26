import { StyleSheet, Text, View, TextInput, Pressable, Dimensions,Platform, KeyboardAvoidingView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../global/colors'
import { useState, useEffect } from 'react';
import { setUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/authService';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { insertSession, clearSessions } from '../../db';
import { Alert } from 'react-native';

const textInputWidth = Dimensions.get('window').width * 0.7

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch()

    const [triggerLogin, result] = useLoginMutation()


    useEffect(() => {
        console.log("Resultado del login:", result);
    
        if (result.isSuccess) {
            Alert.alert(
                "Éxito",
                "Usuario logueado con éxito",
                [{ text: "OK", onPress: () => console.log("Usuario logueado con éxito") }]
            );
    
            dispatch(setUser(result.data));
    
            if (rememberMe) {
                clearSessions()
                    .then(() => console.log("Sesiones eliminadas"))
                    .catch(error => console.log("Error al eliminar las sesiones: ", error));
    
                insertSession({
                    localId: result.data.localId,
                    email: result.data.email,
                    token: result.data.idToken,
                })
                    .then(res => console.log("Usuario insertado con éxito", res))
                    .catch(error => console.log("Error al insertar usuario", error));
            }
        }
    
        if (result.isError) {
            // Manejo de errores
            const errorMessage = result.error?.data?.error?.message || "Error desconocido";
            
            if (result.error?.data?.error?.message === 'INVALID_LOGIN_CREDENTIALS') {
                Alert.alert('Error de Autenticación', 'Correo electrónico o contraseña incorrectos. Intenta de nuevo.');
            } else if (result.error?.data?.error?.message === 'INVALID_EMAIL') {
                Alert.alert('Error de Correo', 'El correo electrónico ingresado no es válido. Por favor, verifica e intenta de nuevo.');
            } else {
                Alert.alert('Error desconocido', `Ocurrió un problema al intentar iniciar sesión: ${errorMessage}`);
            }
        }
    }, [result, rememberMe]);
    

    const onsubmit = () => {
 
        triggerLogin({ email, password })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <LinearGradient
                colors={['#040404', '#ffffff']}
                start={{ x: 0, y: 0 }} // esquina superior izquierda
                end={{ x: 1, y: 1 }}   // esquina inferior derecha
                style={styles.gradient}
            >
                <Text style={styles.title}>ALL GAMES</Text>
                <Text style={styles.subTitle}>Ingresa</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        placeholderTextColor="#EBEBEB"
                        placeholder="Email"
                        style={styles.textInput}
                    />
                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor="#EBEBEB"
                        placeholder='Password'
                        style={styles.textInput}
                        secureTextEntry
                    />

                </View>
                <View style={styles.rememberMeContainer}>
                    <Text style={styles.whiteText}>Mantener sesión iniciada</Text>
                    {
                        rememberMe
                            ?
                            <Pressable onPress={() => setRememberMe(!rememberMe)}><Icon name="toggle-on" size={48} color={colors.verdepalta} /></Pressable>
                            :
                            <Pressable onPress={() => setRememberMe(!rememberMe)}><Icon name="toggle-off" size={48} color={colors.grisClaro} /></Pressable>
                    }
                </View>
                <View style={styles.footTextContainer}>
                    <Text style={styles.whiteText}>¿No tienes una cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate('Signup')}>
                        <Text style={
                            {
                                ...styles.whiteText,
                                ...styles.underLineText
                            }
                        }>
                            Crea una
                        </Text>
                    </Pressable>
                </View>

                <Pressable style={styles.btn} onPress={onsubmit}><Text style={styles.btnText}>Iniciar sesión</Text></Pressable>

                <View style={styles.guestOptionContainer}>
                    <Text style={styles.whiteText}>¿Solo quieres dar un vistazo?</Text>
                    <Pressable onPress={() => dispatch(setUser({ email: "jlemunozr@gmail.com", token: "demo" }))}>
                        <Text style={{ ...styles.whiteText, ...styles.strongText }}>Ingresa como invitado</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },  
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: colors.verdepalta,
        fontFamily: "airstrike",
        fontSize: 24
    },
    subTitle: {
        fontFamily: "Montserrat",
        fontSize: 18,
        color: colors.amarillo,
        fontWeight: '700',
        letterSpacing: 3
    },
    inputContainer: {
        gap: 16,
        margin: 16,
        marginTop: 48,
        alignItems: 'center',

    },
    textInput: {
        padding: 8,
        paddingLeft: 16,
        borderRadius: 16,
        backgroundColor: "#95859E",
        width: textInputWidth,
        color: colors.blanco,
    },
    footTextContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    whiteText: {
        color: colors.blanco
    },
    underLineText: {
        textDecorationLine: 'underline',
    },
    strongText: {
        fontWeight: '900',
        fontSize: 16
    },
    btn: {
        padding: 16,
        paddingHorizontal: 32,
        backgroundColor: colors.verdepalta,
        borderRadius: 16,
        marginTop: 32
    },
    btnText: {
        color: colors.blanco,
        fontSize: 16,
        fontWeight: '700'
    },
    guestOptionContainer: {
        alignItems: 'center',
        marginTop: 64
    },
    rememberMeContainer: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 8,
    }
})