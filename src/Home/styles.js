import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 1,
  },
  send: {
    width: 23,
    height: 23,
  },
});

export default styles;