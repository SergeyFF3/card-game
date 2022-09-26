import React, {useEffect, useState} from "react";
import {useRootData} from "../utils/hooks/store";
import {observer} from "mobx-react";
import {AdminDeck} from "../components/AdminDeck";
import {ClientDeck} from "../components/ClientDeck";
import {DialogStartGame} from "../components/DialogStartGame";
import {Button} from "@mui/material";
import DialogResultGame from "../components/DialogResult";

const MainPage = observer(() => {
    const {getDeck, deckInfo} = useRootData((store) => store.deckStore);
    const {setStartGame, gameState} = useRootData((store) => store.gameStore);

    useEffect(() => {
        if (!deckInfo) getDeck()
    }, [getDeck, deckInfo])

    return (
        <>
            {gameState === "GAME_END" && <DialogResultGame />}
            {gameState === "WAIT_START" && <DialogStartGame/>}
            <div style={{
                background: 'url("https://media.istockphoto.com/vectors/seamless-pattern-with-playing-card-suits-on-green-background-vector-id696973922?k=20&m=696973922&s=612x612&w=0&h=b-E6w7KobibLFtHvvSqQQQy8hK14VM-c-YkHY4zVjF4=")',
                backgroundRepeat: 'repeat',
                height: '100vh',
                color: 'white'
            }}>
                <div className="container h-100">
                    <div className="row flex-column justify-content-between h-100">
                        <div className="mt-3">
                            <AdminDeck />
                        </div>
                        <div className="mb-3">
                            <ClientDeck />
                        </div>
                    </div>
                </div>
                {gameState === "GAME" &&
                    <div style={{
                        position: 'fixed',
                        right: '20px',
                        top: "50%"
                    }}>
                        <Button 
                            variant="contained"
                            size="large"
                            onClick={() => setStartGame("GAME_END")}
                        >
                            Закончить игру
                        </Button>
                    </div>
                }
            </div>
        </>

    )
});

export default MainPage;