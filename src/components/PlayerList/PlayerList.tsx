import { IPlayer } from '../Game/Game';
import './playerList.css';

interface IProps {
    players: IPlayer[];
}

export const PlayerList = ({ players }: IProps) => {
    return (
        <div>
            {players.map((player) => {
                return <div>{player.name}</div>;
            })}
        </div>
    );
};
