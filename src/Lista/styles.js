import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    areaFeed: {},
    nomeUsuario: {
      fontSize: 22,
      textAlign: "left",
      color: "#000000",
    },
    fotoPerfil: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    fotoPublicacao: {
      flex: 1,
      height: 400,
      alignItems: "center",
    },
    viewPerfil: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      padding: 8,
    },
    areaBtn: {
      flexDirection: "row",
      padding: 5,
    },
    iconelike: {
      width: 24,
      height: 24,
    },
    btnSend: {
      paddingLeft: 5,
    },
    viewRodape: {
      flexDirection: "row",
      alignItems: "center",
    },
    descRodape: {
      paddingLeft: 5,
      fontSize: 15,
      color: "#000",
    },
    nomeRodape: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
      paddingLeft: 5,
    },
    likes: {
      fontWeight: "bold",
      marginLeft: 5,
    },
  });

  export default styles;