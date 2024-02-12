import { View, Text, TextInputProps } from 'react-native'
import React from 'react'
import Styled from '../Styled'
import { StyledProps } from 'nativewind'
import { DEFAULT_INPUT_PLACEHOLDER } from '../../utils/constants'


interface InputProps extends TextInputProps {
    className?: string,
    placeHolder?: string
}
const Input: React.FC<InputProps> = ({ placeholder = DEFAULT_INPUT_PLACEHOLDER, ...props }) => {
    return <Styled.Input  {...props} placeholder={placeholder} className='bg-gray-500 rounded-sm px-2 text-black font-semibold' />
}

export default Input