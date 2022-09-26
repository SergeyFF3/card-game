import {Button, Dialog} from "@mui/material";
import React from "react";
import {observer} from "mobx-react";
import {useRootData} from "../utils/hooks/store";


export const DialogResultGame = observer(({}) => {
    const {setStartGame, setLogin, gameState, getResult} = useRootData((store) => store.gameStore);

    console.log('getResult', getResult())

    return (
        <Dialog
            open={gameState === "GAME_END"}
            onClose={() => setStartGame("WAIT_START")}
            aria-labelledby="draggable-dialog-title"
        >
            <div className="d-flex flex-column" style={{
                padding: '50px'
            }}>
                <h1 className="text-center mb-3 mt-0">{getResult()}</h1>

                <Button
                    variant="outlined"
                    onClick={() => setStartGame("WAIT_START")}
                >
                    Закрыть
                </Button>
            </div>
        </Dialog>
    )
})

export default DialogResultGame;