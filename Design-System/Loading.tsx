import React from 'react';
import Styled from './Styled';
import { ActivityIndicator } from 'react-native';

const Loading = (): React.JSX.Element => {
    return (
        <Styled.View className=' h-screen w-full flex items-center justify-center'>
            <ActivityIndicator color="#3c8aff" size="large" />
        </Styled.View>
    )
}

export default Loading;