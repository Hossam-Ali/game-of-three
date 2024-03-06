export interface LoginResponse {
  user: string;
  message: string;
  socketId: string;
}

interface SidebarProps {
  content: ReactNode;
  rooms: Room[];
}
