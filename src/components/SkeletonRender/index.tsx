import { StyleSheet, useWindowDimensions } from 'react-native'
import { MotiView, View } from 'moti'
import { Skeleton } from 'moti/skeleton'
import { Spacer } from 'components'

const SkeletonRender = () => {
  const { height } = useWindowDimensions()
  const colors = ['#9BDBE8', '#B6F1EC', '#fff']

  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
      style={[styles.skeletonContainer, styles.skeletonPadding]}
      animate={{ backgroundColor: '#FFFFFF' }}
    >
      <Skeleton colors={colors} radius='round' height={65} width={65} />
      <Spacer height={16} />
      <Skeleton colors={colors} width='80%' />

      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          marginTop: height * (30 / 801),
        }}
      >
        <Skeleton colors={colors} radius='round' height={50} width={50} />
        <Spacer height={10} />
        <Skeleton colors={colors} width='95%' />
        <Spacer height={10} />
        <Skeleton colors={colors} width='85%' />
      </View>
      <Spacer height={30} />
      <Skeleton colors={colors} radius='round' height={65} width={65} />
      <Spacer height={16} />
      <Skeleton colors={colors} width='90%' />
      <Spacer height={16} />
      <Skeleton colors={colors} width='100%' />
      <Spacer height={70} />
      <Skeleton colors={colors} width='100%' />
    </MotiView>
  )
}

const styles = StyleSheet.create({
  skeletonContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  skeletonPadding: {
    padding: 30,
  },
})

export default SkeletonRender
