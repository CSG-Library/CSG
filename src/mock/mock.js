// module.exports = function() {
//   return {
//     hotcat: require('./cookbook-hotcat.json'),
//     list: require('./cookbook-list.json'),
//     category: require('./cookbook-category.json'),
//     detail: require('./cookbook-detail.json')
//   }
// }

module.exports = function(){
  return {
    introduce:require('./book-introduce.json'),
    longcom:require('./long-comments.json'),
    shortcom:require('./short-comments.json')
  }
}