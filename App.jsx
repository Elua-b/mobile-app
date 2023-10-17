import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import FlatCard from "./components/FlatCard";

const { Text, View, Button, StyleSheet, SafeAreaView, ScrollView } = require("react-native");

function App(){
    return(
      <SafeAreaView>
        <ScrollView>
           
            <FlatCard/>
            <ElevatedCards/>
            <FancyCard/>
        </ScrollView>
      </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})
export default App; 