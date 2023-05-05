import { createContext, useReducer } from 'react';

export const Context = createContext();

const initialState = {
  photos: [],
  numberOfImages: 0,
  isCollapsed: false,
  input: { title: null, file: null, path: null },
};

const handleOnChange = (state, e) => {
  if (e.target.name === 'file') {
    return {
      ...state.input,
      file: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    return { ...state.input, title: e.target.value };
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addPhoto':
      return {
        ...state,
        photos: [state.input, ...state.photos],
        input: { title: null, file: null, path: null },
      };
    case 'countImages':
      return {
        ...state,
        numberOfImages: state.photos.length,
      };
    case 'setInput':
      return {
        ...state,
        input: handleOnChange(state, action.payload.value),
      };
    case 'setIsCollapsed':
      return {
        ...state,
        isCollapsed: action.payload.bool,
      };

    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatcher }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
