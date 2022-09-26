import {Button, Dialog, TextField} from "@mui/material";
import React, {useState} from "react";
import {observer} from "mobx-react";
import {useRootData} from "../utils/hooks/store";

export const DialogStartGame = observer(({}) => {
    const [name, setName] = useState<string>('');
    const {setStartGame, setLogin, gameState} = useRootData((store) => store.gameStore);

    const handleChange = (event: any) => {
        setName(event.target.value)
    }

    return (
        <Dialog
            open={gameState === "WAIT_START"}
            onClose={() => setStartGame("GAME")}
            aria-labelledby="draggable-dialog-title"
        >
            <div className="d-flex flex-column" style={{
                padding: '50px'
            }}>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setStartGame("GAME")
                        setLogin(name)
                    }}
                >
                    Начать игру
                </Button>
            </div>
        </Dialog>
    )
})

export default DialogStartGame;