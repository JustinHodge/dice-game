export interface IPieceOrientation {
    topFace: number;
    northFace: number;
    southFace: number;
    eastFace: number;
    westFace: number;
    bottomFace: number;
}

export interface IGamePiece {
    player: number;
    isSelected: boolean;
    pieceOrientation: IPieceOrientation;
}

export interface IBoardSpace {
    occupant: IGamePiece | null;
}
