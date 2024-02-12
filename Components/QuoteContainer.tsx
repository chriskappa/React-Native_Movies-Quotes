
import React, { useCallback, useMemo } from 'react'
import Loading from '../Design-System/Loading'
import useQuotes from '../Hooks/useQuotes'
import { MissingQuotes, Quote, AddQuoteForm } from '../Design-System/QuoteScreen/'
import { FlatList } from 'react-native'
import { SaveToLocalStorage, Storage } from '../utils/utilFunctions'

export interface IItem { user: Record<string, string>, quote: string, uID: string }

const QuoteContainer = () => {
    const { quotes, quotesLoading, favouriteID, setQuotes, setQuotesLoading, setFavouriteID } = useQuotes()
    const QuotesListHasItems = useMemo(() => quotes.length > 0, [quotes])

    const handleFavourite = (id: string) => {
        const indexOfFavouriteQuote = quotes.findIndex((value) => value.uID === id)
        const newItem = quotes[indexOfFavouriteQuote];
        // Moving the new item to top if its favourite
        const newData = [newItem, ...quotes.slice(0, indexOfFavouriteQuote), ...quotes.slice(indexOfFavouriteQuote + 1)];
        setQuotes(newData);
        setFavouriteID(id);
        SaveToLocalStorage(Storage.FAVOURITE, id);
    };

    const renderItem = useCallback(({ item }: { item: IItem, }) => (
        <Quote
            data={item}
            isFavourite={item.uID === favouriteID}
            onPress={() => handleFavourite(item.uID)}
        />
    ), [quotes, favouriteID]);

    const FlatListQuotes = () => QuotesListHasItems ? <FlatList
        data={quotes as []}
        renderItem={renderItem}
        keyExtractor={(item) => item.uID}
        initialNumToRender={4}
        maxToRenderPerBatch={1}
    /> : <MissingQuotes />

    return (
        <>
            <AddQuoteForm />
            {quotesLoading && <Loading />}
            <FlatListQuotes />
        </>
    )
}

export default QuoteContainer