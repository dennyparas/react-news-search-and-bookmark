import {
  SET_NEWS_LOADING,
  SET_TOP_NEWS,
  CLEAR_TOP_NEWS,
  TOP_NEWS_ERROR,
  SET_SOURCE_LOADING,
  GET_NEWS_SOURCE,
  NEWS_SOURCE_ERROR,
  CHANGE_THEME,
  SET_THEME
} from '../actions/types';

const initialState = {
  newsLoading: false,
  newsSourceLoading: false,
  newsSource: [],
  newsItems: [],
  newsItemsTotal: null,
  pageSize: 50,
  theme: null,
  newsSourceError: false,
  topNewsError: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload
      };
    case SET_NEWS_LOADING:
      return {
        ...state,
        newsLoading: true
      };
    case SET_TOP_NEWS:
      return {
        ...state,
        topNewsError: false,
        newsItems: [...state.newsItems, ...payload.articles],
        newsItemsTotal: payload.totalResults,
        newsLoading: false
      };
    case CLEAR_TOP_NEWS:
      return {
        ...state,
        newsItems: [],
        newsItemsTotal: null
      };
    case TOP_NEWS_ERROR:
      return {
        ...state,
        newsItems: [],
        newsLoading: false,
        newsItemsTotal: 0,
        topNewsError: true
      };
    case SET_SOURCE_LOADING:
      return {
        ...state,
        newsSourceLoading: true
      };
    case GET_NEWS_SOURCE:
      return {
        ...state,
        newsSourceError: false,
        newsSourceLoading: false,
        newsSource: payload
      };
    case NEWS_SOURCE_ERROR:
      return {
        ...state,
        newsSourceLoading: false,
        newsSource: [],
        newsSourceError: true
      };
    default:
      return state;
  }
};
