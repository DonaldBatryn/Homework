import {receiveSearchGiphys} from '../actions/giphy_actions';

// const fetchSearchGiphys = (searchTerm) => {
//     return (
//         $.ajax({
//         url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Nj1ZL5AT57GZZJpNxCUqVMyfzzFgr245&limit=2`,
//         type: 'GET',
//         // data: formData,
//         success(data) {
//           // debugger;
//             console.log('Your callback here!');
//             console.log(data);
//         }
//     }))
// };

export const fetchSearchGiphys = (searchTerm) => {
  return (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm)
      .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  }
};

export default fetchSearchGiphys;


// const fetchSuccess = giphys => store.dispatch(receiveSearchGiphys(giphys))fetchSearchGiphys("puppies").then(fetchSuccess);