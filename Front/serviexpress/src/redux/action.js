import axios from "axios";
import swal from "sweetalert";
export const LOGOUT_SESSION = "LOGOUT_SESSION";
export const AUTHENTICATE = "AUTHENTICATE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const GET_FAVORITES = "GET_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const GET_MERCADOPAGO = "GET_MERCADOPAGO";
export const GET_STRIPE = "GET_STRIPE";
export const FAVORITE_CHECK = "FAVORITE_CHECK";
export const SEND_BUDGET = "SEND_BUDGET";
export const POST_CHAT = "POST_CHAT";
export const  GET_CHAT = " GET_CHAT";
export const GET_BUDGETS = "GET_BUDGETS";
export const CREATE_USER_CHAT = "CREATE_USER_CHAT";
export const CREATE_USER_CHAT_ENGINE = 'CREATE_USER_CHAT_ENGINE'; 




export const types = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART: "V",
  CLEAR_CART: "CLEAR_CART",
};

// Para desloguearse
export const act_logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_SESSION,
    });
  };
};

// Para simular un login
export const fakeLogin = (pO_User) => {
  return async (dispatch) => {
    const response = {
      user: {
        id: 1,
        email: "test@mail.com",
        role: "admin",
        avatar: "https://i.pravatar.cc/300?img=1",
        createAt: "2020-01-01",
      },
      login:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1MzI1NzYxMX0.ddFBn_SeeWJJGxO303d8lRl58P4x6WADvOeTXzfVj9Q",
    };
    dispatch({
      type: AUTHENTICATE,
      payload: response,
    });
  };
};

// Para traer un usuario
export const getUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`/login`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!data.message) {
      dispatch({
        type: "USER_LOGIN_SUCCESSFULLY",
        payload: data,
      });
    } else {
      console.debug(data);
      dispatch({
        type: "USER_LOGIN_ERROR",
        payload: data.message,
      });
    }
  };
};

// Para traer un usuario, esta repetida
export const getUserr = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post("/login", user, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (data.message) {
      dispatch({
        type: "GET_USER_ERROR",
        payload: data.message,
      });
    } else {
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };
};

// Para cuando se registra un usuario
export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { email, password } = user;
      const { data } = await axios.post("/users", {
        email,
        password,
      });
      dispatch({
        type: "REGISTER_USER",
        payload: "Usuario registrado correctamente", // mandar este mensaje por la ruta de users
      });
    } catch (error) {
      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: error.response.data,
      });
    }
  };
};

// Action para crear una publicacion
export const createPublication = (pObjData) => {
  return async () => {
    try {
      const response = await axios.post(`/publications`, pObjData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response;
    } catch (e) {
      console.log(e.message);
    }
  };
};

// Action creada por James
export const jalz_getAllCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/categories`);
      dispatch({
        type: "JALZ_GET_CATEGORIES",
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    const publi = await axios.get(`/publications/${id}`);
    dispatch({
      type: "GET_BY_ID",
      payload: publi.data,
    });
  };
};

//simulando la accion para el filtro por categorias
export function filterCategories(payload) {
  return async (dispatch) => {
    return dispatch({ type: "FILTER_CATEGORIES", payload });
  };
}

// Trae todas las categorias
export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/categories`);
     
      return dispatch({
        type: "GET_CATEGORIES",
        payload: json.data.map((el) => {
          return { id: el.id, name: el.name };
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//simulando la accion para hacer un post a la ruta y agregar informacion del usuario creado
export const postProfileUser = (input) => {
  return async (dispatch) => {
    try {
      let profileUser = await axios.post(`/users/`, input);
      return dispatch({ type: "POST_PROFILEUSER", profileUser });
    } catch (error) {
      console.log(error);
    }
  };
};

// Action para utilizar los loaders
export const swich_loading = (e) => {
  return { type: "SWICH_LOADING", payload: e };
};

//Nos trae las publicaciones para renderizar en el home
export function getPublications() {
  return async (dispatch) => {
    try {
      const response = await axios.get("/publications");
      dispatch({
        type: "GET_PUBLICATIONS",
        payload: response.data,
      });
    } catch (error) {
      console.log("SERVICES NO FOUND");
    }
  };
}

// Nos trae el detalle de una publicacion
export const getPublicationId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/publications/${id}`);
      return dispatch({
        type: "GET_PUBLICATION_ID",
        payload: data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: "GET_PUBLICATION_ID", payload: [] });
    }
  };
};

// Para el search bar, nos trae la publicacion buscada por nombre
export function getPublicationsName(name) {
  return function (dispatch) {
    axios
      .get(`/publications?title=` + name)
      .then((responese) => {
        dispatch({
          type: "GET_PUBLICATIONS_NAME",
          payload: responese.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_PUBLICATIONS_NAME",
          payload: swal({
            title: "No matches found",
            icon: "error",
          })
        })
      })
      // .catch(function () {
      //   swal({
      //     title: "ERROR",
      //     text: "Not Found",
      //     icon: "https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswersstaticfilecdnv2.azureedge.net%2Fstatic%2Fimages%2Fimage-not-found.jpg",
      //     dangerMode: true,
      //   });
      // });
  };
}

// Busca un usuario en particular
export function getUserById(id) {
  return async (dispatch) => {
    try {
      let data = await axios.get("/users/" + id);
      dispatch({ type: "GET_USER_BY_ID", payload: data.data.user });
    } catch (error) {
      console.log(error);
    }
  };
}

// Trae todos los usuarios
export function getUsers() {
  return async (dispatch) => {
    try {
      let users = await axios.get("/users?page=1&offset=10&limit=100");
      dispatch({ type: "GET_USERS", payload: users.data.users });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPublicationsByCategory(a) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/publications?cat_id=` + a);
      //  console.log(response.data)
      dispatch({
        type: "GET_PUBLICATIONS_BY_CATEGORIES",
        payload: response.data,
      });
    } catch (error) {
      swal({
        icon: "error",
        text: 'Sorry! There are no publications yet.',
      })
    }
  };
}

//FUNCION PARA AGREGAR A FAV
export function addToFavorites(user, publication) {
  return async (dispatch) => {
    try {
      await axios.post(`/users/${user}/favorites`, publication);
      let fav = await axios.get(`/users/${user}/favorites`);

      dispatch({
        type: ADD_TO_FAVORITES,
        payload: fav.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//FUNCION PARA TRAER FAVORITOS
export function getFavorites(user) {
  return async (dispatch) => {
    try {
      const fav = await axios.get(`/users/${user}/favorites`);

      dispatch({
        type: GET_FAVORITES,
        payload: fav.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// PARA BORRAR
export function removeFavorites(user, publication) {
  return async (dispatch) => {
    try {
      await axios.delete(`/users/${user}/favorites`, {
        data: publication,
      });
      const fav = await axios.get(`/users/${user}/favorites`);
      dispatch({
        type: REMOVE_FAVORITES,
        payload: fav.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function confirmPassword(form) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/register/success`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const { data } = await axios.put(`/register/confirm`, {
        ...form,
        ...response.data,
      });
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function getErrorRegister() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/register/error`);
      console.log(data);
      dispatch({
        type: "GET_ERROR_REGISTER",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_ERROR_REGISTER_ERROR",
        payload: error,
      });
    }
  };
}

export function clearErrorRegister() {
  return async (dispatch) => {
    const { data } = await axios.post(`/register/logout`);
    dispatch({
      type: "CLEAR_ERROR_REGISTER",
      payload: data,
    });
  };
}

export function clearUserRegister() {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_USER_REGISTER",
    });
  };
}

export function getMercadoPago(title, price, contractId,usremail) {
  return async (dispatch) => {
    const { data } = await axios.post(`/payments/mercado`, { title, price, contractId,usremail });

    dispatch({
      type: GET_MERCADOPAGO,
      payload: data,
    });
  };
}

export function sendEmail({ email, type }) {
  return async (dispatch) => {
    try {
  
      const { data } = await axios.post(`/email?type=${type}`, {
        email,
      });
      dispatch({
        type: "SEND_MAIL",
        payload: !!data.state,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const loginUser = (loginData) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/login`, loginData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!data.message) {
      dispatch({
        type: "USER_LOGIN_SUCCESSFULLY",
        payload: data,
      });
    } else {
      dispatch({
        type: "USER_LOGIN_DATA_ERROR",
        payload: data.message,
      });
    }
  };
};

export const clearErrorLogin = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_ERROR_LOGIN",
    });
  };
};

export const sendLogin = () => {
  return (dispatch) => {
    dispatch({
      type: "SEND_LOGIN",
    });
  };
};

export const clearErrorDataLogin = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_LOGIN_DATA_ERROR",
    });
  };
};

export function getStripe(stripeid, amount, usremail, idBuyer, idPublicacion) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/payments", {
        stripeid,
        amount,
        usremail,
        idBuyer,
        idPublicacion,
      });

      dispatch({
        type: GET_STRIPE,
        payload: data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function favoriteCheck(user, publication) {
  return async (dispatch) => {
    try {
      const fav = await axios.get(`/users/${user}/favorites`);
      dispatch({
        type: FAVORITE_CHECK,
        payload: [fav.data.publications, publication],
      });
    } catch (error) {}
  };
}

export function act_getPublicationByUser(pId) {
  return async (dispatch) => {
    try {
      const responce = await axios.get(`/publications/user/${pId}`);
      dispatch({
        type: "ACT_GET_PUBLICATION_BY_USER",
        payload: responce.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postForm2(input) {
  return async (dispatch) => {
    try {
    
      let checkoutform = await axios.post(`/contracts`, input);
      dispatch({ type: "POST_FORM2", payload: checkoutform.data });
    } catch (error) {
      console.log(error);
    }
  };
}

/* export function filterprice(value) {
  return async (dispatch) => {
    try {
      let response =
        value === "range1"
          ? (await axios.get("/publications")).data.filter((a) => a.price < 500)
          : value === "range2"
          ? (await axios.get("/publications")).data.filter(
              (a) => a.price >= 500 && a.price < 2000,
            )
          : value === "range3"
          ? (await axios.get("/publications")).data.filter(
              (a) => a.price >= 2000 && a.price < 4000,
            )
          : value === "range4"
          ? (await axios.get("/publications")).data.filter(
              (a) => a.price >= 4000,
            )
          : value === "all"
          ? (await axios.get("/publications")).data
          : await axios.get("/publications");

      dispatch({ type: "FILTER_PRICE", payload: response });
    } catch (error) {
      swal({
        icon: "error",
        text: 'Sorry! There are no publications yet.',
      })
    }
  };
} */

export function sendBudget(
  publicationId,
  user_request,
  id_seller,
  comment_request,
  picture_request,
  priority,
) {
  return async (dispatch) => {
    try {
      const data = await axios.post("/budgets", {
        publicationId,
        user_request,
        id_seller,
        comment_request,
        picture_request,
        priority
       });      
      dispatch({
        type: SEND_BUDGET,
        payload: data.data.id
      })
    } catch (error) { console.log(error) }
  }

};


export function postChat(budgetId, comment, id_sender, id_receiver){
    return async (dispatch) =>{
        axios.post("/budgets/chat",{
          budgetId, 
          comment, 
          id_sender, 
          id_receiver
       }) 
        dispatch({
          type: POST_CHAT,
        })
    }
};

export function getChat(id,idOrder){
    return async (dispatch) => {
        const chat = await axios.get('/budgets/chat/'+id);
        const filtered = chat.data.filter(e => e.id == idOrder);
        dispatch({
          type: GET_CHAT,
          payload: filtered[0].chats,
        })
    }
};

export function updateUser(id, user) {
  return async (dispatch) => {
    const { data } = await axios.put(`/users/${id}`, user);
    dispatch({
      type: "UPDATE_USER_DATA",
      payload: data,
    });
  };
}

export const act_putPublication = async (pId, pOform) => {
    try {
      const responce = await axios.put(`/publications/${pId}`, pOform,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return responce.data;
    } catch (error) {
      console.log(error);
    }
};

export function getBudgets (id) {
    return async (dispatch) => {

      try {
        const {data} = await axios.get(`/budgets`);
        const filtered =  data.filter(e => e.id_seller === id);
        
        dispatch({
          type: GET_BUDGETS,
          payload: filtered,
        })
    
      } catch (error) { console.log(error); }
    } 


};


export function createUserChat(user,userName,text,pass) {

  return async () => {
      
      try {
          const chat = await axios.put('https://api.chatengine.io/chats/',
          {
            usernames: [userName],
            title: "I want a budget",
            is_direct_chat: false
         
        },{
          headers: {
          'Project-ID': process.env.REACT_APP_CHAT_ORDERS_ID,
          "User-Name": user,
          "User-Secret": pass,
        
        },
        }
          
          );
     
      try {
         await axios.post(`https://api.chatengine.io/chats/${chat.data.id}/messages/`,
        {
          text: text,
       
      },{
        headers: {
        'Project-ID': process.env.REACT_APP_CHAT_ORDERS_ID,
        "User-Name": user,
        "User-Secret": pass,
      
      },
      }
        
        );
  
      
    } catch (error) { console.log(error); }

      } catch (error) { console.log(error); }
  }
};



export function getMyChat(user,pass) {

  return async (dispatch) => {

      try {
        const chat =  await axios.get('https://api.chatengine.io/chats/',{
          headers: {'Project-ID': process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
          "User-Name": user,
          "User-Secret": pass,
          }
        });
               
      } catch (error) { console.log(error); }
  }
};

export function getMyOrders() {
  return async (dispatch) => {
    try {
      const order = await axios.get(`/contracts`);
      dispatch({
        type: "GET_MY_ORDERS",
        payload: order.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postReview(id, input) {
   return async (dispatch) => {
    try {
      const review = await axios.put(`/contracts/review/${id}`, input);
      dispatch({
        type: "POST_REVIEW",
        payload: review.data,
      });  
    } catch (error) { console.log(error) }
   }
}

export function filterprice(value) {
  return (dispatch) => {
    try {
      let response = value
   

      dispatch({ type: "FILTER_PRICE", payload: response });
    } catch (error) {
      swal({
        icon: "error",
        text: 'Sorry! There are no publications yet.',
      })
    }
  };
}


export function createUserChatEngine(email,pass){
    return async () => {
        try {
          await axios.put('https://api.chatengine.io/users/',{
            
              username: email,
              secret: pass
          
          },{
            headers: {
            'PRIVATE-KEY': process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY

          }
          })

          
        } catch (error) {
          console.log(error);
        }
    }
};
