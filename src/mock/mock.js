module.exports = function () {
   return {
      cate: require('./paper-cate.json'),
      corr: require('./paper-corr.json'),
      maga: require('./maga-cate.json'),
      introduce: require('./book-introduce.json'),
      longcom: require('./long-comments.json'),
      shortcom: require('./short-comments.json'),
      bookdata: require('./novel-chapter.json'),
      findAllbook: require('./homepage.json'),
      findAllbookBytype: require('./homepageAside.json'),
      library: require('./library.json'),
      rankArticle: require('./rank-article-list.json'),
      mybook:require('./my-book.json')
   }
}