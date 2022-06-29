import axios from "axios";

export const GET_ORDERS = "GET_ORDERS";


 
 
export const act_themeTogle = () => {
  return {
    type: "TOGGLE",
  };
};

export const act_getAllUsers = () => {
  return async (dispatch) => {
    try {
      
      const { data } = await axios.get(`/users`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      
      dispatch({
        type: "GET_ALL_USERS",
        payload: data.users,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const act_getUsersCount = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      dispatch({
        type: "GET_USERS_COUNT",
        payload: data.count,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function act_getUserById(pIdentity) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/users/${pIdentity}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      dispatch({ 
        type: "GET_USER_BY_ID", 
        payload: data.user 
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export async function act_getOneCategory (pIdentity) {
  try {
    const { data } = await axios.get( `/categories/${pIdentity}` , {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return data
  } catch (error) {console.log(error);}
}

export function act_getAllCategories() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/categories/only`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      dispatch({ 
        type: "GET_ALL_CATEGORIES", 
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const act_postCategory = (oCategory) => {
  return async () => {
    try {
      const data = await axios.post(
        `/categories`,
        oCategory, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export const act_deleteCategory = (pIdentity) => {
  return async () => {
    try {
      const data = await axios.delete(
        `/categories/${pIdentity}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}


export const act_getAllServices = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/services`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      dispatch({
        type: "GET_ALL_SERVICES",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const act_filterServicesByCategory = (pObj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/services/category/${pObj.id}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      //add foreign key to services
      data.forEach((pI) => {
        pI.categories = [pObj];
      });

      dispatch({
        type: "FILTER_SERVICES_BY_CATEGORY",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const act_clearServices = () => {
  return {
    type: "CLEAR_SERVICES",
  };
}

export function getOrders(){

    return async (dispatch) => {
      try {
         const {data} = await axios.get(`/contracts`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });

         dispatch({
            type: GET_ORDERS,
            payload: data,
         })

        
      } catch (error) {
          console.log(error);
      }

    }


};

export function getPublications(){
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/publications`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      
      dispatch({
        type: "GET_ALL_PUBLICATIONS",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getContractsPercentage(){
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/contracts/percentage`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      
      dispatch({
        type: "GET_CONTRACTS_PERCENTAGE",
        payload: data,
      });
      console.log(data,parseInt(data))
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getTodayPayments(datas){
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/payments`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      if(datas === 'all'){
        dispatch({
          type: "GET_PAYMENTS_TODAY",
          payload: data,
        });
      }
      if(datas === 'length'){
        dispatch({
          type: "GET_PAYMENTS_TODAY_LENGTH",
          payload: data,
        });
      }
      if(datas === 'amount'){
        dispatch({
          type: "GET_PAYMENTS_TODAY_AMOUNT",
          payload: data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getPublicationByYear(){
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/publications/year`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      
      dispatch({
        type: "GET_PUBLICATIONS_YEAR",
        payload: data,
      });
      
    } catch (error) {
      console.log(error.message);
    }
  };
}