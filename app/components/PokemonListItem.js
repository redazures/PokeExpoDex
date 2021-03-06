import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import { LinearGradient } from 'expo-linear-gradient';

const PokemonListItem = ({ name, id, onPress })=>(
  <ListItem 
    activeScale={0.95}
    bottomDivider
    Component={TouchableScale}
    friction={90}
    onPress={onPress}
    rounded 
    linearGradientProps={{
      colors: ['#FF9800', '#F44336'],
      start: { x: 1, y: 0 },
      end: { x: 0.2, y: 0 },
    }}
    tension={100}
  >
    <Avatar 
    
      size={"medium"}
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      }} 
      />
    <ListItem.Content >
      <ListItem.Title 
        style={{ 
          color: 'yellow', 
          fontSize:20,
          fontWeight: 'bold', 
          }}
        >
          {name}
        </ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

export default PokemonListItem

const styles=StyleSheet.create({
  container:{
    backgroundColor:'red',
  },
})