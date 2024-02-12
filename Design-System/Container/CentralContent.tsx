import React from 'react';
import Styled from '../Styled';

interface ICentralContentProps { text: string, user: Record<string, string> }

const CentralContent = ({ text, user }: ICentralContentProps): React.JSX.Element => {
    return (
        <Styled.View className='p-4'>
            < Styled.View className='p-1' >
                <Styled.Text className='text-xxl font-semibold'>❝ {text} ❞</Styled.Text>
                <Styled.Text className='text-right font-semibold text-black'>-{user}</Styled.Text>
            </Styled.View >
        </Styled.View>
    )
}
export default CentralContent