import axios from "../config/axios";
import {deckDeckIdDraw, deckDeckIdPileNameListURL, deckIdPilePileNameAddURL, newDeckURL} from "../config/apiListURL";
import {AxiosResponse} from "axios";
import {DeckTypes} from "../types/deck";

interface IDeckService {
    getDeck: () => Promise<AxiosResponse<DeckTypes.IDeckInfo>>;
}

// @ts-ignore
export class DeckService implements IDeckService {

    static getDeck(): Promise<AxiosResponse<DeckTypes.IDeckInfo>>{
        return axios.get(newDeckURL)
    }

    static getCard(deckId: string, count: number) {
        return axios.get(deckDeckIdDraw(deckId, count))
    }

    static getCartForPile(deckId: string, pileName: string, cards: string) {
        return axios.get(deckIdPilePileNameAddURL(deckId, pileName, cards))
    }

    static getAllCartForPile(deckId: string, pileName: string) {
        return axios.get(deckDeckIdPileNameListURL(deckId, pileName))
    }
}