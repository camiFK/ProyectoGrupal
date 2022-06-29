import {
  AUTHENTICATE,
  LOGOUT_SESSION,
  ADD_TO_FAVORITES,
  GET_FAVORITES,
  REMOVE_FAVORITES,
  GET_MERCADOPAGO,
  GET_STRIPE,
  FAVORITE_CHECK,
  SEND_BUDGET,
  POST_CHAT,
  GET_CHAT,
  GET_BUDGETS,
  CREATE_USER_CHAT,
  CREATE_USER_CHAT_ENGINE,
  
} from "./action";
const initialState = {
  rdcr_isAuth: window.sessionStorage.getItem("token"),
  rdcr_user: {
    location: "USA, Fenix",
    id: 2,
    email: "nnxx@hotmail.com",
    "$2a$10$bLsRQPzFUm5wf7F0q0ntV.fW5zru7uPiQIz5T2m46Bi6znOlkgtRK": "123456",
    name: "Juan",
    last_name: "Perez",
    avatar_image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Responsabilidad",
    phone_number: "978654321",
    country: "Peru",
    province_state: "Lima",
    rol: "client",
    buyer_reputation: 3,
    buyer_opinions: [
      {
        commenter: "Fernando Fernandez",
        comment: "Muy cumplido",
        rating: 5,
        buyer_avatar:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        commenter: "Carlos Perez",
        comment: "Bien",
        rating: 4,
        buyer_avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        commenter: "Nicolas Garcia",
        comment: "No se pudo completar el trabajo por un problema mio",
        rating: 4,
        buyer_avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    seller_reputation: 4,
    seller_opinions: [
      { commenter: "Fulano Perez", comment: "Que buen servicio", rating: 5 },
      {
        commenter: "Mengano Gomez",
        comment: "Trabajo decente, medio caro",
        rating: 3,
      },
    ],
    state: "Active",
  },
  rdcr_categories: [],
  Publications: [],
  switchloading: false,
  detail: { album: [] },
  profileUser: [],
  favorites: [],
  categories: [],
  stripe: {},
  filteredCategories: [],
  publicationById: {},
  userId: { seller_opinions: [], buyer_opinions: [] },
  user: {},
  users: [],
  reg_user: {}, // ojo al piojo xD: eliminaron por accidente creo ::
  cart: [],
  errorLogin: "",
  errorDataLogin: "",
  errorRegister: "",
  mercadoPago: "",
  mailSend: false,
  sendLogin: false,
  favorite_check: false,
  budget: 0,
  chat: [],
  budgetsId: [],

  rdcr_publications_by_user: [],
  orders: [],
  review: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "JALZ_GET_CATEGORIES":
      return {
        ...state,
        rdcr_categories: payload,
      };
    case "GET_PUBLICATIONS":
      return {
        ...state,
        Publications: action.payload,
      };
    case "GET_PUBLICATIONS_NAME":
      return {
        ...state,
        Publications: action.payload,
      };
    case "GET_CATEGORIES":
   
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_PUBLICATION_ID":
      return {
        ...state,
        publicationById: action.payload,
      };
    case "SWICH_LOADING":
      return {
        switchloading: true,
      };

    case "GET_BY_ID":
      let aux = action.payload;
      aux.date = aux.date.slice(0, 10);
      return {
        ...state,
        detail: aux,
      };
    case "POST_PROFILEUSER":
      return {
        ...state,
        profileUser: [...action.payload],
      };

    case "FILTER_CATEGORIES":
      let categoriesCopy = state.categories;
      let filtered =
        action.payload === "all"
          ? categoriesCopy
          : categoriesCopy.filter(
              (category) => category.name === action.payload,
            );
      if (filtered.length <= 0) {
        filtered = categoriesCopy;
      }
      return {
        ...state,
        filteredCategories: [...filtered],
      };
    case "FILTER_PRICE":
      return {
        ...state,
        Publications: action.payload,
      };
    case "GET_USER":
      window.sessionStorage.setItem(
        "token",
        payload.email + "/" + payload.password,
      ); //>>>>obs
      return {
        ...state,
        user: payload,
        rdcr_isAuth: true,
        errorLogin: "",
      };
    case "REGISTER_USER":
      return {
        ...state,
        reg_user: { message: payload },
      };
    case "GET_USER_BY_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "GET_PUBLICATIONS_BY_CATEGORIES":
      return {
        ...state,
        Publications: action.payload,
      };

    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        errorLogin: action.payload,
      };
    case AUTHENTICATE:
      window.sessionStorage.setItem("token", payload.login);

      return {
        ...state,
        rdcr_user: payload,
        rdcr_isAuth: true,
      };
    case LOGOUT_SESSION:
      window.sessionStorage.removeItem("token");
      //delete all cokies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString());
      });

      return {
        ...state,
        Publications: [],
        rdcr_isAuth: false,
        rdcr_user: {},
        user: {},
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case "GET_ERROR_REGISTER":
      return {
        ...state,
        errorLogin: action.payload.message,
      };
    case "CLEAR_ERROR_REGISTER":
      return {
        ...state,
        errorRegister: "",
      };
    case "REGISTER_USER_ERROR":
      return {
        ...state,
        errorRegister: action.payload,
      };
    case "CLEAR_USER_REGISTER":
      return {
        ...state,
        reg_user: {},
      };
    case GET_MERCADOPAGO:
      return {
        ...state,
        mercadoPago: action.payload,
      };
    case "SEND_MAIL":
      return {
        ...state,
        mailSend: action.payload,
      };
    case "USER_LOGIN_SUCCESSFULLY":
      window.sessionStorage.setItem(
        "token",
        payload.email + "/" + payload.password,
      ); //>>>>obs
      return {
        ...state,
        user: payload,
        rdcr_isAuth: true,
        errorLogin: "",
      };
    case "USER_LOGIN_ERROR":
      return {
        ...state,
        errorLogin: payload,
        rdcr_isAuth: false,
      };
    case "USER_LOGIN_DATA_ERROR":
      return {
        ...state,
        errorDataLogin: payload,
      };
    case "GET_ERROR_REGISTER_ERROR":
      return {
        ...state,
        errorRegister: "Error",
      };
    case "CLEAR_ERROR_LOGIN":
      return {
        ...state,
        errorLogin: "",
        sendLogin: false,
      };
    case "CLEAR_LOGIN_DATA_ERROR":
      return {
        ...state,
        errorDataLogin: "",
      };
    case "SEND_LOGIN":
      return {
        ...state,
        sendLogin: true,
      };
    case GET_STRIPE:
      return {
        ...state,
        stripe: action.payload,
      };
    case FAVORITE_CHECK:
      let auxCheck = false;

      action.payload[0].forEach((e) => {
        if (e.id === parseInt(action.payload[1])) auxCheck = true;
      });
      return {
        ...state,
        favorite_check: auxCheck,
      };
    case "ACT_GET_PUBLICATION_BY_USER": {
      return {
        ...state,
        rdcr_publications_by_user: payload,
      };
    }
    case "GET_MY_ORDERS": {
      return {
        ...state,
        orders: action.payload,
      };
    }

    case "POST_FORM":
      return {
        ...state,
      };

    case "POST_FORM2":
      return {
        ...state,
        contract: action.payload,
      };
    case "POST_REVIEW":
      return {
        ...state,
        review: action.payload,
      }

    case SEND_BUDGET:
      return {
        ...state,
        budget: action.payload,
      };

    case POST_CHAT:
      return {
        ...state,
      };

      case GET_CHAT:   
        return{
            ...state,
            chat: action.payload,
        }

      case GET_BUDGETS:
       
         return {
              ...state,
              budgetsId: action.payload,

          } 
      case CREATE_USER_CHAT:
          return {
              ...state,

          }

      case CREATE_USER_CHAT_ENGINE:
        return {
            ...state,

        }

    default:
      return state;
  }
};

export default rootReducer;

/* 


case AUTHENTICATE:
      return {
        ...state,
        user: payload,
        rdcr_isAuth: true,
      };
    case RELOAD_AUTH:
      console.log("FIRST", window.sessionStorage.getItem("token"));
      window.sessionStorage.setItem("token", payload);
      return {
        ...state,
        rdcr_isAuth: payload
      }

*/
