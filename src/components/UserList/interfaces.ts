import { User } from "../../store/user/types";
import { ClickHandlerParam } from "../../types";

// Define prop types for this component
export interface UserListProps {
  users: User[];
  deleteHandler: (hEvent: ClickHandlerParam, user: User) => void;
}
