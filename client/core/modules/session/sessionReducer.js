import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const session = (state = initialState, action) => {
  switch (action.type) {
    case constants.session.END:
      return state.setIn(['ended'], true);

    default:
      return state;
  }
};

export default session;