import { User } from "../../store/user/types";

export interface AppProps {}

export interface AppState {
  [key: string]: string;
}

export interface LinkDispatchProps {
  startAddUser: (user: User) => void;
}

export interface LinkStateProps {
  users: User[];
}
