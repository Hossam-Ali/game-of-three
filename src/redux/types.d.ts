export interface initialState {
  user: User;
}

export interface User {
  name: string;
  message: string;
  currentRoom: string;
  loggedIn: boolean;
}

export interface Room {
  id: string;
  name: string;
  owner: string;
  type: string;
}
