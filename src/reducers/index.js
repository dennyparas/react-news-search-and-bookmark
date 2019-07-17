import { combineReducers } from 'redux';
import news from './news';
import bookmarks from './bookmarks';

export default combineReducers({ news, bookmarks });
