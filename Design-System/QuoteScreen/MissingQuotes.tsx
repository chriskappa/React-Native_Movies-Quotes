import React from 'react';
import Styled from '../Styled';
import { MQDEFAULT_SUB_TEXT, MQMAIN_DEFAULT_TEXTT } from '../../utils/constants';

const MissingQuotes = ({ mainText = MQMAIN_DEFAULT_TEXTT, subText = MQDEFAULT_SUB_TEXT }): React.JSX.Element => {
    return (
        <Styled.View>
            < Styled.Text className='font-bold text-red-500 text-medium' > {mainText} </Styled.Text >
            <Styled.Text className='text-center text-red-500'>{subText}</Styled.Text>
        </Styled.View >
    )
}

export default MissingQuotes;