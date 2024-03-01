export interface initialState {
  user: User;
}

export interface User {
  id: string;
  name: string;
  currentRoom: string;
}
