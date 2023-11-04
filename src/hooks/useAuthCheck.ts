import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { getDataFromLocalStorage } from "../utils/localStorageConfig";
import { authUserInterface } from "../features/auth/authInterface";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const user = getDataFromLocalStorage('auth');
        if (user && user.accessToken) {
            dispatch(
                userLoggedIn({accessToken:user.accessToken,user:user.user})
            );
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}