import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const HomePage = () => {
  const { height } = useWindowDimensions()

  return (
    <LinearGradient
      colors={['#FEFDF7', '#B6F1EC', '#9BDBE8']}
      style={styles.container}
      locations={[0.1, 0.75, 1]}
    >
      <Text
        style={{
          color: '#0F4CA6',
          fontWeight: '700',
          fontSize: height * (26 / 801),
        }}
      >
        BRIgita
      </Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomePage
