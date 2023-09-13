import customFetch from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../user/userSlice";
import { getAllJobs, hideLoading, showLoading } from "../alljobs/allJobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  let url = "/jobs";
  try {
    const resp = await customFetch.post(url, job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  let url = "/jobs";
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`${url}/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  let url = "/jobs";
  try {
    const resp = await customFetch.patch(`${url}/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
