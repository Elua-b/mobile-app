import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card ,styles.cardOne]}>
          <Text style={styles}>Red</Text>
        </View>
        <View style={[styles.card ,styles.cardTwo]}>
          <Text style={styles}>Blue</Text>
        </View>
        <View style={[styles.card ,styles.cardThree]}>
          <Text style={styles}>Green</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    padding:28
  }
,
card:{
    width: 100,
    height:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin:8
  
},
cardOne:{
    backgroundColor:'#EF5354',

},cardTwo:{
    backgroundColor:'#50DBB4',

},cardThree:{
    backgroundColor:'#5DA3FA',

},
});
export default FlatCard;
