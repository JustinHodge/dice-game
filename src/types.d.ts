export interface IPieceOrientation {
    topFace: 1 | 2 | 3 | 4 | 5 | 6;
    northFace: 1 | 2 | 3 | 4 | 5 | 6;
    southFace: 1 | 2 | 3 | 4 | 5 | 6;
    eastFace: 1 | 2 | 3 | 4 | 5 | 6;
    westFace: 1 | 2 | 3 | 4 | 5 | 6;
    bottomFace: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface IBoardSpace {
    occupant: IGamePiece | null;
}

export interface IPlayer {
    id: number;
    name: string;
    isActive: boolean;
    color: string;
}

export interface IGameData {
    turn: number;
    playerTurn: number;
    players: IPlayer[];
    boardData: IBoardSpace[];
}
