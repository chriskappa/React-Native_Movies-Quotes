import React, { useState, useCallback } from 'react';
import Styled from '../Styled';
import Input from '../Form/Input';
import AddQuote from '../Form/AddQuote';
import useUser from '../../Hooks/useUser';
import useQuotes from '../../Hooks/useQuotes';
import useAPI from '../../Hooks/useAPI';
import { getRandomID, showToast } from '../../utils/utilFunctions';


const AddQuoteForm = () => {
    const [inputValue, setInputValue] = useState('');
    const { userName } = useUser();
    const { addLocalQuoteAdjusted } = useQuotes();
    const { addQuoteToDB } = useAPI();

    const handleAddQuote = useCallback(async () => {
        try {
            const textIsMissing = !inputValue.trim()
            if (textIsMissing) return showToast("Please Add Content For The Quote")

            const newId = getRandomID();
            addLocalQuoteAdjusted({ uID: newId, user: userName, quote: inputValue }); // I did use optimistic update aproach
            setInputValue("");
            await addQuoteToDB(newId, userName, inputValue);
        }
        catch (error) {
            console.error(error);
        }
    }, [inputValue, userName, addQuoteToDB])

    return (
        <Styled.View className='w-[75%] mb-2'>
            <Input value={inputValue} onChangeText={setInputValue} />
            <AddQuote onPress={handleAddQuote} />
        </Styled.View>
    )
}

export default AddQuoteForm;