import Dice from '../../../Dice/Dice';
import './DiceDisplay.css';

interface IProps {
    diceColor: string;
}

export const DiceDisplay = ({ diceColor }: IProps) => {
    return (
        <div className='diceDemo'>
            {Array.from({ length: 6 }, (_, i) => (
                <Dice
                    primaryColor={`${diceColor}`}
                    secondaryColor={'#FFFFFF'}
                    player={1}
                    isSelected={false}
                    pieceOrientation={{
                        topFace: i + 1,
                        bottomFace: 1,
                        northFace: 2,
                        southFace: 5,
                        eastFace: 4,
                        westFace: 3,
                    }}
                ></Dice>
            ))}
        </div>
    );
};

export default DiceDisplay;
