import { combineReducers } from "redux";
import authreducer from "./auth";
import chanelreducer from "./chanel";
import commentreducer from "./comment";
import currentuserreducer from "./currentuser";
import historyreducer from "./history";
import likedvideoreducer from "./likedvideo";
import videoreducer from "./video";
import watchlaterreducer from "./watchlater";
export default combineReducers({
    authreducer,
    currentuserreducer,
    videoreducer,
    chanelreducer,
    commentreducer,
    historyreducer,
    likedvideoreducer,
    watchlaterreducer
});