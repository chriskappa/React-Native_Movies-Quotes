import React from 'react';
import Styled from '../Styled';
import { TouchableOpacity } from 'react-native';
import { HearIcon, } from '../Icons';

interface IBottomProps { onPressFavourite: Function, isFavourite: boolean }

const Bottom = ({ onPressFavourite, isFavourite }: IBottomProps): React.JSX.Element => {
    return (
        < Styled.View className='bg-[#3c8aff] flex flex-row justify-end rounded-b-sm py-3  px-5 -end' >
            <TouchableOpacity onPress={() => onPressFavourite?.()}>
                <HearIcon color={isFavourite} />
            </TouchableOpacity>
        </Styled.View >
    )
}

export default Bottom;