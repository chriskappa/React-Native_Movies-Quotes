import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAPI from '../Hooks/useAPI';
import { showToast } from '../utils/utilFunctions';


// If for some reason the API is not responsing properly please use this mockdata for setquotes
// const mockData = [{ "createdAt": "2024-02-10T17:02:23.558Z", "user": "Admin", "quote": "fdsfds", "email": "Austyn.Vandervort@hotmail.com", "uID": "4e706d32-0817-4030-aafc-496299886f37", "id": "1" }, { "createdAt": "2024-02-10T18:34:25.792Z", "user": "Admin", "quote": "best", "email": "Audrey_Runte96@gmail.com", "uID": "e736311f-1513-4ec0-9cd5-e1d5e6ce78b0", "id": "2" }, { "createdAt": "2024-02-11T01:32:31.386Z", "user": "Admin", "quote": "fdsd", "email": "Gertrude.Mraz@yahoo.com", "uID": "50a0ad35-c0e4-4d8f-b1a1-92946c17de66", "id": "3" }, { "createdAt": "2024-02-11T10:42:45.949Z", "user": "Admin", "quote": "fsddf", "email": "Ivory40@yahoo.com", "uID": "c8b80c2b-6710-41c6-a0df-d5dbcd771a83", "id": "4" }, { "createdAt": "2024-02-11T00:06:04.045Z", "user": "Admin", "quote": "Hello", "email": "Milford_Gibson@hotmail.com", "uID": "bcf968ee-5072-4e33-8c8c-4613d23c8e86", "id": "5" }]
export const QuoteContext = createContext(undefined);

const QuoteProvider = ({ children }) => {
    const [quotes, setQuotes] = useState([]);
    const [quotesLoading, setQuotesLoading] = useState(false);
    const [favouriteID, setFavouriteID] = useState(0);
    const { fetchQuotes } = useAPI();

    const fetchAndSetFavouriteID = async () => {
        try {
            const id = await AsyncStorage.getItem("favourite");
            setFavouriteID(id);
            return id;
        }
        catch (error) {
            console.error(error)
        }

    };

    const getReorderedQuotes = useCallback((quotesList = [], faVID) => {
        if (!quotesList.length) return quotesList
        const indexOfFavouriteQuote = quotesList.findIndex((value) => value.uID === faVID)
        // If index is stored from previous data that are not exist anymore in DB
        if (indexOfFavouriteQuote < 0) return quotesList
        // Returning reordered data
        const newItem = quotesList[indexOfFavouriteQuote];
        const newData = [newItem, ...quotesList.slice(0, indexOfFavouriteQuote), ...quotesList.slice(indexOfFavouriteQuote + 1)];
        return newData
    }, [])


    const fetchDataReordered = async (source) => {
        try {
            setQuotesLoading(true);
            const favID = await fetchAndSetFavouriteID();
            const quotesList = await fetchQuotes(source);
            const result = getReorderedQuotes(quotesList, favID);
            setQuotes(result);
            setQuotesLoading(false);
        }
        catch (error) {
            console.error(error)
            showToast(`Something went wrong please try again`);
            setQuotesLoading(false)
        }
    }

    const addLocalQuoteAdjusted = useCallback((quote) => {
        setQuotes(prev => {
            const quotesEmptyOrFavouriteDontExist = prev.length === 0 || favouriteID === null;
            const onlyOneQuoteExist = prev.length === 1;
            // If items are empty or favourite id is not set
            if (quotesEmptyOrFavouriteDontExist) {
                return [quote, ...prev];
            }

            // If there is item and favourite exist insert quote to the end
            if (onlyOneQuoteExist) {
                return [...prev, quote];
            }
            //  Quotes with one or more items and favourite id to exist should go to the second element
            const newQuotes = [...prev];
            newQuotes.splice(1, 0, quote);
            return newQuotes;
        });
    }, [favouriteID]);

    useEffect(() => {
        const source = axios.CancelToken.source();
        fetchDataReordered(source)
        return () => {
            source.cancel('Component unmounted, request was canceled');
        };
    }, []);

    const values = {
        quotes,
        quotesLoading,
        favouriteID,
        setQuotes,
        setQuotesLoading,
        setFavouriteID,
        addLocalQuoteAdjusted
    }

    return (
        <QuoteContext.Provider value={values}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteProvider