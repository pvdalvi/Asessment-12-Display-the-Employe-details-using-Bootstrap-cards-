import { setEmployees } from "./reducer";

export const fetchEmployees = () => {
  return async (dispatch) => {
    const response = await fetch("/employees.json");
    const data = await response.json();
    dispatch(setEmployees(data));
  };
};
