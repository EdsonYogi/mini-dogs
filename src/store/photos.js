import createAsyncSlice from "./createAsyncSlice";
import { PHOTOS_GET } from "../services/api";

const photos = createAsyncSlice({
  name: "photos",
  fetchConfig: (payload) => PHOTOS_GET(payload),
});

export const fetchPhotos = (page) => async (dispatch) => {
  try {
    await dispatch(photos.asyncAction(page));
  } catch (error) {}
};

export default photos.reducer;
