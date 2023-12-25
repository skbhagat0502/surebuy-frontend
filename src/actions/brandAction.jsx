import axios from "axios";

import {
  ALL_BRANDS_FAIL,
  ALL_BRANDS_REQUEST,
  ALL_BRANDS_SUCCESS,
  ADMIN_BRANDS_REQUEST,
  ADMIN_BRANDS_SUCCESS,
  ADMIN_BRANDS_FAIL,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_BRAND_FAIL,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAIL,
  BRAND_DETAILS_REQUEST,
  BRAND_DETAILS_SUCCESS,
  BRAND_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/brandConstant";
const apiUrl = import.meta.env.VITE_REACT_API_URL;

// Get All brands
export const getBrand = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BRANDS_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    let link = `${apiUrl}/api/v1/brands`;

    const { data } = await axios.get(link, config);

    dispatch({
      type: ALL_BRANDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BRANDS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Brands For Admin
export const getAdminBrand = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_BRANDS_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.get(`${apiUrl}/api/v1/admin/brands`, config);

    dispatch({
      type: ADMIN_BRANDS_SUCCESS,
      payload: data.brands,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_BRANDS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Brand
export const createBrand = (brandData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BRAND_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${apiUrl}/api/v1/admin/brand/new`,
      brandData,
      config
    );

    dispatch({
      type: CREATE_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BRAND_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Brand
export const updateBrand = (id, brandData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BRAND_REQUEST });

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${apiUrl}/api/v1/admin/brand/${id}`,
      brandData,
      config
    );

    dispatch({
      type: UPDATE_BRAND_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BRAND_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Brand
export const deleteBrand = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BRAND_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${apiUrl}/api/v1/admin/brand/${id}`,
      config
    );

    dispatch({
      type: DELETE_BRAND_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getBrandDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_DETAILS_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      withCredentials: true,
    };
    const { data } = await axios.get(`${apiUrl}/api/v1/brand/${id}`, config);
    dispatch({
      type: BRAND_DETAILS_SUCCESS,
      payload: data.brand,
    });
  } catch (error) {
    dispatch({
      type: BRAND_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
