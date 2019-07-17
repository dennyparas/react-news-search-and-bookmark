import axios from '../axios';
import {
  SET_NEWS_LOADING,
  SET_SOURCE_LOADING,
  GET_NEWS_SOURCE,
  NEWS_SOURCE_ERROR,
  CHANGE_THEME,
  SET_THEME,
  TOP_NEWS_ERROR,
  SET_TOP_NEWS,
  CLEAR_TOP_NEWS
} from './types';

let newsApiKey;

if (process.env.NODE_ENV !== 'production') {
  newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
} else {
  newsApiKey = process.env.NEWS_API_KEY;
}

// Set Theme
export const setTheme = () => {
  let localTheme = localStorage.getItem('theme');

  if (localTheme === undefined || localTheme === null) {
    localTheme = 'dark';
    document.body.style.backgroundColor = '#ccc';
    localStorage.setItem('theme', localTheme);
  }

  if (localTheme === 'dark') {
    document.body.style.backgroundColor = '#ccc';
  } else {
    document.body.style.backgroundColor = '#fff';
  }
  return {
    type: SET_THEME,
    payload: localTheme
  };
};

// Change theme
export const changeTheme = theme => {
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#ccc';
  } else {
    document.body.style.backgroundColor = '#fff';
  }
  return {
    type: CHANGE_THEME,
    payload: theme
  };
};

// Set Source loading
export const setSourceLoading = () => {
  return {
    type: SET_SOURCE_LOADING
  };
};

// Set News Loading
export const setNewsLoading = () => {
  return {
    type: SET_NEWS_LOADING
  };
};

// Get News Source
export const getNewsSource = () => async dispatch => {
  dispatch(setSourceLoading());
  try {
    const newsSource = await axios.get(`sources?apiKey=${newsApiKey}`);
    if (newsSource) {
      dispatch({
        type: GET_NEWS_SOURCE,
        payload: newsSource.data.sources
      });
    }
  } catch (error) {
    dispatch({
      type: NEWS_SOURCE_ERROR
    });
  }
};

// Set Top News
export const setTopNews = (url, page) => async (dispatch, getState) => {
  dispatch(setNewsLoading());

  try {
    if (page === 1) {
      dispatch({ type: CLEAR_TOP_NEWS });
    }
    const { pageSize } = getState().news;
    const newsItems = await axios.get(
      `${url}&apiKey=${newsApiKey}&page=${page}&pageSize=${pageSize}`
    );
    if (newsItems) {
      dispatch({
        type: SET_TOP_NEWS,
        payload: newsItems.data
      });
    }
  } catch (error) {
    dispatch({
      type: TOP_NEWS_ERROR
    });
  }
};

//  Clear top news
export const clearTopNews = () => {
  return {
    type: CLEAR_TOP_NEWS
  };
};
