import {DeckService} from "../services/deckService";
import {action, makeAutoObservable, observable, toJS} from "mobx";
import {DeckTypes} from "../types/deck";

interface IDeckStore {
    deckInfo?: DeckTypes.IDeckInfo;
}

export class DeckStore implements IDeckStore {
    @observable deckInfo;

    constructor() {
        makeAutoObservable(this)
    }

    @action getDeck = () => {
        DeckService.getDeck().then(res => {
            this.deckInfo = res.data
        })
    }

    @action getCartForPile = async (deckId: string, pileName: string) => {
        const card = await DeckService.getCard(deckId, 1)
        return DeckService.getCartForPile(deckId, pileName, card.data.cards[0].code)
    }

    @action getAllCartForPile = (deckId: string, pileName: string) => {
        return DeckService.getAllCartForPile(deckId, pileName).then((res) => {
            return {
                ...res.data,
                playerName: pileName
            }
        })
    }

    calcValue = (cards: DeckTypes.ICardInfo[]) => {
        const cardValues: Array<string> = cards.map((card) => {
            return card.value
        });

        const resultArray = cardValues.map((value) => {
            switch (value) {
                case 'ACE':
                    return 11;
                case 'KING':
                    return 4;
                case 'QUEEN':
                    return 3
                case 'JACK':
                    return 2;
                default:
                    return +value
            }
        })

        return !!resultArray.length && resultArray.reduce((previousValue, currentValue) => {
            return previousValue + currentValue
        })
    }

}
