import { useState } from 'react'
import { SafeAreaView, Text, View, useWindowDimensions } from 'react-native'
import WebView from 'react-native-webview'
import { FabButton, SkeletonRender } from 'components'
import LinearGradient from 'react-native-linear-gradient'
import { ImgBriSabrina } from 'assets'
import { versionMobile } from 'utils'

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
              html: '<iframe src="https://www.chatbase.co/chatbot-iframe/4yFX17vTp1tXfQmCluoGa" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%""> </iframe>',
            }}
            style={{ flex: 1, height, width, margin: 0 }}
            scalesPageToFit={false}
          />
        ) : (
          <ImgBriSabrina
            height={height * (240 / 801)}
            width={width * (240 / 361)}
            style={{ marginBottom: height * (15 / 801) }}
          />
        )}
        <View
          style={{
            flex: 1,
            position: 'absolute',
            right: isShowChatbot ? width * (40 / 361) : width * (40 / 361),
            bottom: isShowChatbot ? undefined : height * (40 / 801),
            top: isShowChatbot ? height * (13 / 801) : undefined,
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
        {isShowChatbot || isShowSkeleton ? null : (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 5,
            }}
          >
            <Text
              style={{
                fontSize: height * (14 / 801),
                fontWeight: '400',
              }}
            >
              {versionMobile}
            </Text>
          </View>
        )}
      </LinearGradient>
    </SafeAreaView>
  )
}

export default HomePage
