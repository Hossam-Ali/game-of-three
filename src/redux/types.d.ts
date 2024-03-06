export interface initialState {
  user: User;
  rooms: Room[];
  loading: boolean;
}

export interface User {
  name: string;
  message: string;
  currentRoom: string;
}

export interface Room {
  id: string;
  name: string;
  owner: string;
  type: string;
}
