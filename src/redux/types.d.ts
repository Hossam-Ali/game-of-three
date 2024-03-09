export interface initialState {
  user: User;
  rooms: Room[];
  loading: boolean;
  message: string;
}

export interface User {
  name: string;
  currentRoom: string;
}

export interface Room {
  id: string;
  name: string;
  owner: string;
  type: string;
}
