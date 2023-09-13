import customFetch from "../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "./allJobSlice";

export const getAllJobsThunk = async (thunkAPI) => {
  let url = "/jobs";

  try {
    const res = await customFetch.get(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
