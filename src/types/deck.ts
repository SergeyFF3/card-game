export namespace DeckTypes {

    export interface IDeckInfo {
        deck_id: string;
        remaining: number;
        shuffled: boolean;
        success: boolean;
    }

    interface ICard {
        image: string;
        value: string;
        suit: string;
        code: string;
    }

    interface IPile {
        cards?: ICard,
        remaining: string;
    }
    
    export interface IPiles {
        deck_id: string;
        remaining: number;
        success: boolean;
        piles: IPile,
    }

    export interface ICardInfo {
        code: string;
        image: string;
        images: {
            png: string,
            svg: string;
        },
        suit: string;
        value: string;
    }



}