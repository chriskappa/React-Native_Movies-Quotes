import { GestureResponderEvent, TouchableOpacityProps } from 'react-native'
import React, { memo } from 'react'
import Styled from '../Styled'
import { customDebounce } from '../../utils/utilFunctions'


interface AddQuoteProps extends TouchableOpacityProps {
    onPress: (event: GestureResponderEvent) => void
}

const AddQuote: React.FC<AddQuoteProps> = ({ onPress, ...rest }) => {
    // I added debouncing to the button for the onpress click to get better efficiency
    const debouncedOnPress = customDebounce(onPress, 200);
    return (
        <Styled.Touchable onPress={debouncedOnPress} {...rest} className='bg-green-300 p-2 rounded-md'>
            <Styled.Text className='text-center text-black font-bold'>Add Quote</Styled.Text>
        </Styled.Touchable>

    )
}

export default memo(AddQuote)