import { SEARCH, SEARCH_FAIL, SEARCH_SUCCESS } from "./actionsTypes";

const init = {
  list: null,
  errors: null,
  loading: false,
};

const listreducer = (state = init, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
      };

    default:
      return state;
  }
};

export default listreducer;
