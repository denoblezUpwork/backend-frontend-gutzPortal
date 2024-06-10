import { createContext, useContext } from 'react';

const ViewContext = createContext();

export const useView = () => useContext(ViewContext);

export default ViewContext;
