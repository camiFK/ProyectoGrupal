import { GET_ORDERS } from "./action";

 
const initialState = {
  rdcr_darkMode: false,
  rdcr_users_count: 0,
  rdcr_users: [],
  rdcr_user: {},
  rdcr_categories: [],
  rdcr_category: {},
  rdcr_services: [],
  rdcr_servicesBckp: [],
  orders: [],
  orders_percentage: 0,
  payments_today: [],
  payments_today_length: 0,
  payments_today_amount: 0,
  publications: [],
  publications_year: []
};
const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { rdcr_darkMode,  rdcr_servicesBckp} = state;
  switch (type) {
    case "TOGGLE": {
      return {
        ...state,
        rdcr_darkMode: !rdcr_darkMode,
      };
    }
    case "GET_ALL_USERS": {
      return {
        ...state,
        rdcr_users: payload,
      };
    }
    case "GET_USERS_COUNT": {
      return {
        ...state,
        rdcr_users_count: payload,
      };
    }
    case "GET_USER_BY_ID": {
      return {
        ...state,
        rdcr_user: payload,
      };
    }
    case "GET_ALL_CATEGORIES": {
      return {
        ...state,
        rdcr_categories: payload,
      };
    }
    case "GET_ALL_SERVICES": {
      return {
        ...state,
        rdcr_services: payload,
        rdcr_servicesBckp: payload,
      };
    }
    case "FILTER_SERVICES_BY_CATEGORY": {
      return {
        ...state,
        rdcr_services: payload,
      };
    }
    case "CLEAR_SERVICES": {
      return {
        ...state,
        rdcr_services: [...rdcr_servicesBckp]
      };
    }
    case GET_ORDERS:{
      return {
        ...state,
        orders: action.payload,
      }
    }
    case "GET_ALL_PUBLICATIONS":{
      return {
        ...state,
        publications: action.payload,
      }
    }
    case "GET_CONTRACTS_PERCENTAGE":{
      return {
        ...state,
        orders_percentage: parseInt(action.payload),
      }
    }
    case "GET_PAYMENTS_TODAY":{
      return {
        ...state,
        payments_today: action.payload,
      }
    }
    case "GET_PAYMENTS_TODAY_LENGTH":{
      return {
        ...state,
        payments_today_length: action.payload.length,
      }
    }
    case "GET_PAYMENTS_TODAY_AMOUNT":{
      var amount = 0;
      action.payload.forEach((elem)=>{
        amount+=elem.amount
      })
      return {
        ...state,
        payments_today_amount: amount,
      }
    }
    case "GET_PUBLICATIONS_YEAR":{
      return {
        ...state,
        publications_year: action.payload,
      }
    }
    default: return state; 
  }
};

export default rootReducer;
