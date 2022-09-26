import {DeckStore} from "./deckStore";
import {GameStore} from "./gameStore";

export class RootStore {
    deckStore: DeckStore;

    gameStore: GameStore;

    constructor() {
        this.deckStore = new DeckStore();
        this.gameStore = new GameStore();
    }
}

export const createStore = () => {
    return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();