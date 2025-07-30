import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

export const AuthContext = createContext({})

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState( {
        isAuth: false,
        user: null,
        status: 'pending',
    } );
    const navigate = useNavigate();

    useEffect (() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const decoded = jwtDecode(token);
                void fetchUserData ( decoded.sub, token );
            } catch (e) {
                console.error("Token decode failed", e)
                logout();
            }
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login( JWT ) {
        localStorage.setItem('token', JWT);
        const decoded = jwtDecode( JWT );

        console.log(JWT)

        void fetchUserData ( decoded.sub, JWT, '/' );
    }

    function logout() {
        localStorage.removeItem("token");
        toggleIsAuth( {
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log("We logging out");
        navigate('/');
    }

    async function fetchUserData ( id, token, redirectUrl ) {
        try {
            const result = await axios.get ( `http://localhost:8080/users/username/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            } );
            toggleIsAuth( {
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    role: result.data.role,
                },
                status: 'done',
            } );

            if ( redirectUrl ) {
                navigate(redirectUrl);
            }
        } catch (e) {
            console.error(e);
            toggleIsAuth( {
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        authState: isAuth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={ contextData }>
            { isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;