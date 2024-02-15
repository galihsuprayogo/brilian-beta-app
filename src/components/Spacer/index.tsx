import { View } from 'react-native'

type SpacerProps = {
  height?: number
}

const Spacer = (props: SpacerProps) => <View style={{ height: props.height }} />

export default Spacer
