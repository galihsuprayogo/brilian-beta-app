import { useState } from 'react'
import { SafeAreaView, View, useWindowDimensions } from 'react-native'
import WebView from 'react-native-webview'
import { FabButton, SkeletonRender } from 'components'
import LinearGradient from 'react-native-linear-gradient'
import { ImgBriSabrina } from 'assets'

const HomePage = () => {
  const { height, width } = useWindowDimensions()
  const [isShowSkeleton, setIsShowSkeleton] = useState<boolean>(false)
  const [isShowChatbot, setIsShowChatbot] = useState<boolean>(false)

  return isShowSkeleton ? (
    <SkeletonRender />
  ) : (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={['#B6F1EC', '#FEFDF7', '#9BDBE8']}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        locations={[0.1, 0.5, 0.85]}
      >
        {isShowChatbot ? (
          <WebView
            source={{
              html: '<iframe height="100%" width="100%" src="https://www.chatbase.co/chatbot-iframe/4yFX17vTp1tXfQmCluoGa" style="border:0;border-radius:10px;background-color:#000000"> </iframe>',
            }}
            style={{ flex: 1, height, width }}
            scalesPageToFit={false}
          />
        ) : (
          <ImgBriSabrina height={height * (240 / 801)} width={width * (240 / 361)} />
        )}
        <View
          style={{
            flex: 1,
            position: 'absolute',
            right: isShowChatbot ? width * (50 / 361) : width * (40 / 361),
            bottom: isShowChatbot ? undefined : height * (40 / 801),
            top: isShowChatbot ? height * (20 / 801) : undefined,
            alignItems: 'flex-end',
          }}
        >
          <FabButton
            isPress={isShowChatbot}
            onPress={() => {
              if (!isShowChatbot) {
                setIsShowSkeleton(true)
                const mount = setTimeout(() => {
                  setIsShowSkeleton(false)
                  setIsShowChatbot(true)
                }, 800)
                return () => clearTimeout(mount)
              }
              if (isShowChatbot) {
                setIsShowChatbot(false)
              }
            }}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default HomePage
