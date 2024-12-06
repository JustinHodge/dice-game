import { IPieceOrientation } from '../../types';
import './Dice.css';

interface IProps {
    primaryColor: string;
    pieceOrientation: IPieceOrientation;
}

const computeSecondaryColor = (primaryColor: string) => {
    const r = 255 - parseInt(primaryColor.substring(1, 3), 16);
    const g = 255 - parseInt(primaryColor.substring(3, 5), 16);
    const b = 255 - parseInt(primaryColor.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
};

export const Dice = ({ primaryColor, pieceOrientation }: IProps) => {
    const shownFace = pieceOrientation.topFace;
    const pips = [];
    const pipPositions = [4, 0, 8, 2, 6, 3, 5, 1, 7, 4];
    const secondaryColor = computeSecondaryColor(primaryColor);

    for (let i = 0; i < shownFace; i++) {
        let pipPosition;

        if (shownFace % 2 === 0) {
            pipPosition = pipPositions[i + 1];
        } else {
            pipPosition = pipPositions[i];
        }

        pips.push(
            <div
                className={`pip pip${pipPosition}`}
                style={{
                    backgroundColor: secondaryColor,
                }}
            ></div>
        );
    }

    return (
        <div className='dice' style={{ backgroundColor: primaryColor }}>
            {pips}
        </div>
    );
};

export default Dice;
