import axios from "axios";

import {
  ALL_MODELS_FAIL,
  ALL_MODELS_REQUEST,
  ALL_MODELS_SUCCESS,
  ADMIN_MODELS_REQUEST,
  ADMIN_MODELS_SUCCESS,
  ADMIN_MODELS_FAIL,
  CREATE_MODEL_REQUEST,
  CREATE_MODEL_SUCCESS,
  CREATE_MODEL_FAIL,
  UPDATE_MODEL_REQUEST,
  UPDATE_MODEL_SUCCESS,
  UPDATE_MODEL_FAIL,
  DELETE_MODEL_REQUEST,
  DELETE_MODEL_SUCCESS,
  DELETE_MODEL_FAIL,
  MODEL_DETAILS_REQUEST,
  MODEL_DETAILS_FAIL,
  MODEL_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/modelConstant";
const apiUrl = import.meta.env.VITE_REACT_API_URL;

// Get All MODELS
export const getModel = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_MODELS_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    let link = `${apiUrl}/api/v1/models`;

    const { data } = await axios.get(link, config);

    dispatch({
      type: ALL_MODELS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_MODELS_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Get All MODELS For Admin
export const getAdminModel = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MODELS_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.get(`${apiUrl}/api/v1/admin/models`, config);

    dispatch({
      type: ADMIN_MODELS_SUCCESS,
      payload: data.models,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_MODELS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create MODEL
export const createModel = (modelData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_MODEL_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${apiUrl}/api/v1/admin/model/new`,
      modelData,
      config
    );

    dispatch({
      type: CREATE_MODEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_MODEL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update MODEL
export const updateModel = (id, modelData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_MODEL_REQUEST });

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.put(
      `${apiUrl}/api/v1/admin/model/${id}`,
      modelData,
      config
    );
    dispatch({
      type: UPDATE_MODEL_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MODEL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete MODEL
export const deleteModel = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_MODEL_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${apiUrl}/api/v1/admin/model/${id}`,
      config
    );

    dispatch({
      type: DELETE_MODEL_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MODEL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get model Details
export const getModelDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MODEL_DETAILS_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.get(`${apiUrl}/api/v1/model/${id}`, config);

    dispatch({
      type: MODEL_DETAILS_SUCCESS,
      payload: data.model,
    });
  } catch (error) {
    dispatch({
      type: MODEL_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get model Details
export const calculatePrice = (deviceCondn) => async (dispatch) => {
  try {
    dispatch({ type: NEW_DEVICE_PRICE_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.get(`${apiUrl}/api/v1/model/${id}`, config);

    dispatch({
      type: NEW_DEVICE_PRICE_SUCCESS,
      payload: data.newPrice,
    });
  } catch (error) {
    dispatch({
      type: NEW_DEVICE_PRICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
