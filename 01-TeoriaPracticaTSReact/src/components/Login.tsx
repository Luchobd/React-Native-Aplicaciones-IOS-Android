import { useReducer, useEffect } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
      break;

    case "login":
      //   const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        nombre: action.payload.nombre,
        username: action.payload.username,
      };
      break;
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Fernando",
        username: "Strider",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>

        <div className="alert alert-info">Validando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>

      {token ? (
        <div className="alert alert-success">Autenticado como: {nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado...</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
/*
1. useReducer => es una alternativa al useState cuando se tiene un estado que es un poco mas elaborado y que puede cambiar de diferentes maneras, es decir es muy parecido al concepto de redux.


2. sintaxis => const authReducer = (state, action): AuthState => la "action" es quien modifica al "state".  

3. Diferencia entre "interface" y "type". Es mejor manejar las "action" con type para que se un tipo propiamente de typescript, porque no se va expandir y son objetos propios de typescript. 
*/
