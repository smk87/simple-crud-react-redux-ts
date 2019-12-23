import { InputHandlerParam } from "../../types";

// Define prop types for this component
export interface InputProps {
  type: string;
  label: string;
  inputHandler: (hEvent: InputHandlerParam) => void;
}
