import { actionTypes } from '../../constants';
import { IMG_RESOURCE, PLACEHOLDER } from '../../constants/utils';

const initialState = {
  data: [],
  page: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_DOCUMENTARY_SUCCESS:
      if (action.payload.page > state.page) {
        return {
          ...state,
          page: action.payload.page,
          data: [
            ...state.data,
            ...action.payload.data.map(item => ({
              ...item,
              src: item['poster_path']
                ? `${IMG_RESOURCE}${item['poster_path']}`
                : PLACEHOLDER,
            })),
          ],
        };
      }
      return {
        ...state,
        data: action.payload.data.map(item => ({
          ...item,
          src: item['poster_path']
            ? `${IMG_RESOURCE}${item['poster_path']}`
            : PLACEHOLDER,
        })),
      };
    default:
      return state;
  }
};

export default reducer;
