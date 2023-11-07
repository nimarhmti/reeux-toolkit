import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, appDispatch } from "../../redux/Store";

export const useAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
