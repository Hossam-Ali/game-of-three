export interface initialState {
  user: User;
  rooms: Room[];
  loading: boolean;
  message: string;
  room: RoomDetails;
}

export interface User {
  name: string;
  currentRoom: string;
  activeTurn: boolean;
  gameStart: boolean;
}

export interface Room {
  id: string;
  name: string;
  owner: string;
  type: string;
}

export interface RoomDetails {
  startNumber: number;
  currentNumber: number;
}
