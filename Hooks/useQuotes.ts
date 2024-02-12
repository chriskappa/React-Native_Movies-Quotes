import React, { useContext } from 'react';
import { QuoteContext } from '../Context/QuoteContext';

type Quote = {
    user: string,
    quote: string,
    uID: string
}
interface IUseQuoteReturnValue {
    quotes: Quote[],
    quotesLoading: boolean,
    favouriteID: string,
    addLocalQuoteAdjusted: Function,
    setQuotes: Function,
    setQuotesLoading: Function,
    setFavouriteID: Function
}

const useQuotes = (): IUseQuoteReturnValue => {
    const context = useContext(QuoteContext);
    if (context === undefined) {
        throw new Error('useQuotes must be used within a QuoteProvider');
    }
    return context;
};

export default useQuotes;