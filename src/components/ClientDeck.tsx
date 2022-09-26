import React, {useEffect, useState} from "react";
import {useRootData} from "../utils/hooks/store";
import {observer} from "mobx-react";
import AddIcon from '@mui/icons-material/Add';
import {IconButton} from "@mui/material";

export const ClientDeck = observer(() => {
    const {deckInfo, getCartForPile, getAllCartForPile, calcValue} = useRootData((store) => store.deckStore);
    const {setUserScore, gameState} = useRootData((store) => store.gameStore);

    const [deckPlayer2, setDeckPlayer2] = useState<Array<any>>([])

    const getCartForPlayer = async (playerName: string) => {
        if (deckInfo) {
            await getCartForPile(deckInfo.deck_id, playerName)
            await getAllCartForPile(deckInfo.deck_id, playerName).then((res) => {
                if (res.playerName === 'player2') {
                    setDeckPlayer2(res.piles['player2'].cards)
                }
            })
        }
    }

    useEffect(() => {
        if (gameState === "GAME_END" && deckPlayer2) setUserScore(calcValue(deckPlayer2))
    }, [gameState, setUserScore, deckPlayer2])

    return (
        <div>
            <h5 style={{
                position: 'fixed',
                right: '25px',
                top: '25px',
                fontSize: '100px',
                margin: 0
            }}>
                {calcValue(deckPlayer2)}
            </h5>
            <div className="d-flex justify-content-center align-content-center">
                {!!deckPlayer2.length && deckPlayer2.map((deck, index) => {
                    return <img src={deck.image} width={100} key={index}/>
                })}
                <IconButton
                    size="large"
                    onClick={() => getCartForPlayer("player2")}
                    className="ml-3"
                >
                    <AddIcon fontSize="inherit" color="info"/>
                </IconButton>
            </div>

        </div>
    )
})

export default ClientDeck;