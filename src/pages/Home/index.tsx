import { Spacer } from 'components'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const HomePage = () => {
  const { height } = useWindowDimensions()
  const [isShowSkeleton, setIsShowSkeleton] = useState<boolean>(false)
  const colors = ['#9BDBE8', '#B6F1EC', '#fff']

  useEffect(() => {
    setIsShowSkeleton(true)
  }, [])

  // counting trigger show skeleton
  useEffect(() => {
    if (isShowSkeleton) {
      let base = 3
      const interval = setInterval(() => {
        base -= 1
        if (base < 0) {
          setIsShowSkeleton(false)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isShowSkeleton])

  const SkeletonRender = () => (
    <MotiView
      transition={{
        type: 'timing',
      }}
      style={[styles(isShowSkeleton).container, styles(isShowSkeleton).skeletonPadding]}
      animate={{ backgroundColor: '#e4e2e2' }}
    >
      <Skeleton colors={colors} radius='round' height={75} width={75} />
      <Spacer height={12} />
      <Skeleton colors={colors} width='80%' />
      <Spacer height={12} />
      <Skeleton colors={colors} width='100%' />
      <Spacer height={12} />
      <Skeleton colors={colors} width='100%' />
    </MotiView>
  )

  return isShowSkeleton ? (
    <SkeletonRender />
  ) : (
    <LinearGradient
      colors={['#FEFDF7', '#B6F1EC', '#9BDBE8']}
      style={styles(isShowSkeleton).container}
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

const styles = (isShowSkeleton?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: isShowSkeleton ? 'flex-start' : 'center',
      justifyContent: 'center',
    },
    skeletonContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    skeletonPadding: {
      padding: 20,
    },
  })

export default HomePage
