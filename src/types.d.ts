export interface MessageResponse {
  user: string;
  message: string;
  socketId?: string;
  room?: string;
}

interface SidebarProps {
  content: ReactNode;
  rooms: Room[];
}
