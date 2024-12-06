import { useState } from 'react';
import { Board } from '../Board/Board';
import { PlayerList } from '../PlayerList/PlayerList';
import { StartGame } from '../StartGame/StartGame';
import { IGameData } from '../../types';

export const Game = () => {
    const [gameData, setGameData] = useState<IGameData>();

    return gameData ? (
        <>
            <PlayerList players={gameData.players} />
            <Board boardData={gameData.boardData} />
        </>
    ) : (
        <StartGame setGameData={setGameData} />
    );
};

export default Game;
