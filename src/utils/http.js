import axios from 'axios';

const get = ({ url }) => {
   return new Promise((resolve, reject) => {
      axios({
         url
      }).then(res => {
         resolve(res);
      }).then(error => {
         reject(error);
      })
   })
}

const post = ({ url }) => {
   return new Promise((resolve, reject) => {
      axios({
         url
      }).then(res => {
         resolve(res);
      }).then(error => {
         reject(error);
      })
   })
}


export {
   get,
   post
}