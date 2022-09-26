import {action, makeAutoObservable, observable} from "mobx";

type GameStateT = "WAIT_START" | "GAME" | "GAME_END";

interface IGameStore {

}

export class GameStore implements IGameStore {
    @observable gameState: GameStateT = "WAIT_START";

    @observable login?: string;

    @observable adminScore?: number;

    @observable userScore?: number;

    constructor() {
        makeAutoObservable(this)
    }

    @action setStartGame = (action: GameStateT) => {
        this.gameState = action;
    }

    @action setLogin = (login: string | undefined) => {
        this.login = login;
    }

    @action clearStore = () => {
        this.gameState = "WAIT_START"
        this.adminScore = undefined;
        this.userScore = undefined;
    }

    @action setAdminScore = (score: number | undefined) => {
        this.adminScore = score;
    }

    @action setUserScore = (score: number | undefined) => {
        this.userScore = score;
    }

    @action getResult = () => {
        debugger
        if (this.adminScore === this.userScore) {
            return 'Ничья'
        }
        if (this.adminScore > this.userScore) {
            return 'Проигрыш'
        }
        if (this.adminScore < this.userScore) {
            return 'Победа'
        }
    }
}