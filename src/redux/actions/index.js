import { fetchData } from "../../api";
import { serializeItem } from "../../api/serializers";
import { FETCH_ERROR, FETCH_SUCCESS } from "./types";

const getFourItem = ({ results = [] }) => {
  const newData = [];
  results.forEach((item, index) => {
    if (index < 4) {
      newData.push(serializeItem(item));
    }
  });
  return newData;
};

const geCategories = ({ filters = [] }) => {
  return filters[0]?.values[0]?.path_from_root;
};

export const fetchDataAction = (query) => (dispatch) => {
  fetchData(query)
    .then((response) => {
      const payload = {
        items: getFourItem(response),
        categories: geCategories(response),
      };
      dispatch({
        type: FETCH_SUCCESS,
        payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    });
};
