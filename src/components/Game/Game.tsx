import { useEffect, useState } from 'react';
import { Board } from '../Board/Board';
import { IBoardSpace } from '../../types';

export const Game = () => {
    const BOARD_DIMENSIONS = { x: 8, y: 8 };
    const [boardData, setBoardData] = useState<IBoardSpace[]>([]);

    useEffect(() => {
        const initialBoardData = [];
        for (let i = 0; i < BOARD_DIMENSIONS.x; i++) {
            for (let j = 0; j < BOARD_DIMENSIONS.y; j++) {
                initialBoardData.push({
                    occupant: null,
                });
            }
        }

        setBoardData(initialBoardData);
    }, [BOARD_DIMENSIONS.x, BOARD_DIMENSIONS.y]);

    return (
        <>
            <Board boardData={boardData} />
        </>
    );
};

export default Game;
