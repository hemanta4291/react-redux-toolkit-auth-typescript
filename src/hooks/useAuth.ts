import { useSelector } from "react-redux";
import { useAppSelector } from "./reduxHooks";



export default function useAuth() {
    const auth = useAppSelector((state) => state.auth);

    if (auth?.accessToken) {
        return true;
    } else {
        return false;
    }
}