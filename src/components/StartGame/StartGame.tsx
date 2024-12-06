import { useState } from 'react';
import DiceDisplay from './components/DiceDisplay/DiceDisplay';
import './StartGame.css';
import { IGameData } from '../../types';

interface IProps {
    setGameData: React.Dispatch<React.SetStateAction<IGameData | undefined>>;
    gameData?: IGameData;
}

export const StartGame = ({ setGameData, gameData }: IProps) => {
    const [player1Settings, setPlayer1Settings] = useState({
        name: '',
        color: '#000000',
    });

    const [player2Settings, setPlayer2Settings] = useState({
        name: '',
        color: '#FFFFFF',
    });

    const numberOfDice = 8;

    return (
        <div className='startGame'>
            <h1>Start Game? </h1>
            <form>
                <div>
                    <label htmlFor='player1Name'>Player 1</label>
                    <input
                        type='text'
                        id='player1Name'
                        placeholder='Player 1 Name'
                        value={player1Settings.name}
                        onChange={(e) =>
                            setPlayer1Settings({
                                ...player1Settings,
                                name: e.target.value,
                            })
                        }
                    />
                    <label htmlFor='player1Color'>Player 1 Color</label>
                    <input
                        type='color'
                        id='player1Color'
                        value={player1Settings.color}
                        onChange={(e) =>
                            setPlayer1Settings({
                                ...player1Settings,
                                color: e.target.value,
                            })
                        }
                    />
                    <DiceDisplay diceColor={player1Settings.color} />
                </div>
                <div>
                    <label htmlFor='player2Name'>Player 2</label>
                    <input
                        type='text'
                        id='player2Name'
                        placeholder='Player 2 Name'
                        value={player2Settings.name}
                        onChange={(e) =>
                            setPlayer2Settings({
                                ...player2Settings,
                                name: e.target.value,
                            })
                        }
                    />
                    <label htmlFor='player2Color'>Player 2 Color</label>
                    <input
                        type='color'
                        id='player2Color'
                        value={player2Settings.color}
                        onChange={(e) =>
                            setPlayer2Settings({
                                ...player2Settings,
                                color: e.target.value,
                            })
                        }
                    />
                    <DiceDisplay diceColor={player2Settings.color} />
                </div>
                <button
                    type='button'
                    onClick={() =>
                        setGameData({
                            ...gameData,
                            turn: 0,
                            playerTurn: Math.random() > 0.5 ? 1 : 2,
                            boardData: Array.from(
                                { length: 8 * numberOfDice },
                                (_, i) => ({
                                    occupant: null,
                                })
                            ),
                            players: [
                                {
                                    id: 1,
                                    name: player1Settings.name,
                                    color: player1Settings.color,
                                    isActive: false,
                                },
                                {
                                    id: 2,
                                    name: player2Settings.name,
                                    color: player2Settings.color,
                                    isActive: false,
                                },
                            ],
                        })
                    }
                >
                    Start
                </button>
            </form>
        </div>
    );
};
