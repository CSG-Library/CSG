// redux的方法combineReducers 合并所有的reducer
import { combineReducers } from 'redux';

// import { reducer as paperCate} from '../home/paperCate/index';
// import { reducer as paperCate} from '../home/paperCate/';
import { reducer as paperCate} from '../home/paperCate';


export default combineReducers({
   paperCate,
})
