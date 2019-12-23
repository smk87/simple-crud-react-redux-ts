import { User } from "../../store/user/types";

// Define prop types for this component
export interface AppProps {}

export interface LinkDispatchProps {
  startAddUser: (user: User) => void;
  startDeleteUser: (user: User) => void;
}

export interface LinkStateProps {
  users: User[];
}

// Define state property types for this component
export interface AppState {
  [key: string]: string;
}
