import {
  LOAD_SAVE,
  UPDATE_LAST_PAGE,
} from '../actions';


export const initialState = {
  book: 'The War-Torn Kingdom',
  page: 123,
};

export default function settings(state = initialState, action) {
  switch (action.type) {

    case UPDATE_LAST_PAGE:
      return {
        book: action.book,
        page: action.page,
      };

    case LOAD_SAVE:
      return action.state.settings;

    default:
      return state;
  }
}
