import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers"; // type RootState из '../store/reducers/index'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
