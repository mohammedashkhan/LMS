import { FETCH, UPDATE} from '../constants/actionTypes';

export default (Profile = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case UPDATE:
      return Profile.map((p) => (p._id === action.payload._id ? action.payload : p));
    default:
      return Profile;
  }
};

