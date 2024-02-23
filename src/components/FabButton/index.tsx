import { StyleSheet, TouchableOpacity } from 'react-native'
import { IcChat, IcX } from 'assets'

const FabButton = (props: { onPress?: () => void; isPress?: boolean }) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles(props.isPress).fabButton, styles(props.isPress).shadow]}
  >
    {props.isPress ? (
      <IcX height={19} width={19} fill='#FFFFFF' />
    ) : (
      <IcChat height={30} width={30} fill='#FFFFFF' />
    )}
  </TouchableOpacity>
)

const styles = (isPress?: boolean) =>
  StyleSheet.create({
    fabButton: {
      width: isPress ? 30 : 60,
      height: isPress ? 30 : 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: '#65d5eb',
    },
    shadow: {
      shadowColor: '#FFFFFF',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      fontSize: 23,
      textAlign: 'center',
    },
  })

export default FabButton
