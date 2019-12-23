import { InputHandlerParam } from "../../types";

export interface InputProps {
  type: string;
  label: string;
  inputHandler: (hEvent: InputHandlerParam) => void;
}
