module.exports = function () {
   return {
      cate: require('./paper-cate.json'),
      corr: require('./paper-corr.json'),
      maga: require('./maga-cate.json'),
      introduce: require('./book-introduce.json'),
      longcom: require('./long-comments.json'),
      shortcom: require('./short-comments.json'),
      findAllbook: require('./homepage.json'),
      findAllbookBytype: require('./homepageAside.json'),
      library:require('./library.json')
   }
}