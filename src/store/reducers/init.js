import * as actionTypes from '../actions/actionTypes';
const API_KEY = 'AIzaSyA0Av5Hy_PdaRLGAkEyUS7sFi8DFvrCujo';
import _ from 'lodash';
import { updateObject } from '../../shared/utility';
import YTSearch from 'youtube-api-search';

const initialState = {
    videos: [],
    selectedVideo: null
}

const setInitVideos = ( state, action ) => {
    return updateObject( state, { videos: action.videosArr.videos,selectedVideo:action.videosArr.selectedVideo } );
};
const selectedVideo = ( state, action ) => {
    return updateObject( state, { selectedVideo: action.selectedVideo } );
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_INIT_VIDEOS: return setInitVideos( state, action );
        case actionTypes.SELECTED_VIDEO: return selectedVideo( state, action );
        default: return state;
    }
};
export default reducer;