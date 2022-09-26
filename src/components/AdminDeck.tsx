import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {useRootData} from "../utils/hooks/store";

export const AdminDeck = observer(() => {
    const {gameState, adminScore, setAdminScore} = useRootData((store) => store.gameStore);

    const {getAllCartForPile, getCartForPile, deckInfo, calcValue} = useRootData((store) => store.deckStore);

    const [deckPlayer1, setDeckPlayer1] = useState<Array<any>>([])

    const getCartForBot = async () => {
        if (!!deckInfo && gameState === "GAME") {
            await getCartForPile(deckInfo.deck_id, 'player1')
            await getAllCartForPile(deckInfo.deck_id, 'player1')
                .then((res) => {
                    setDeckPlayer1(res.piles['player1'].cards)
                })
        }
    }

    useEffect(() => {
        if (calcValue(deckPlayer1) < 17) getCartForBot()
    }, [])

    useEffect(() => {
        if (calcValue(deckPlayer1) < 17) getCartForBot()
        setAdminScore(calcValue(deckPlayer1))
    }, [deckInfo, getCartForPile, getAllCartForPile, deckPlayer1, gameState])

    return (
        <div className="d-flex justify-content-center align-content-center flex-column">
            <h1>Бот{gameState === "GAME_END" && ': ' + adminScore}</h1>
            <div className="d-flex justify-content-center align-content-center">
                {!!deckPlayer1.length && deckPlayer1.map((deck, index) => {
                    return <img
                        src={gameState === "GAME_END" ? deck.image : 'https://github.com/crobertsbmw/deckofcards/blob/master/static/img/back.png?raw=true'}
                        width={100}
                        key={index}
                    />
                })}
            </div>
        </div>
    )
})

export default AdminDeck;