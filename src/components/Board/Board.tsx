import { IBoardSpace } from '../../types';
import './Board.css';

interface IProps {
    boardData: IBoardSpace[];
}

export const Board = ({ boardData }: IProps) => {
    return (
        <div className='boardWrapper'>
            {boardData.map((boardSpace) => {
                return (
                    <div className='boardSpace'>
                        {boardSpace.occupant ? (
                            <div>{boardSpace.occupant.player}</div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};
