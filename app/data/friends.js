// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [
  {
    name: "Mariah Carey",
    photo:
      "https://trendyceleb.com/wp-content/uploads/2015/12/Mariah-Carey.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
  },
  {
    name: "Beyonce",
    photo: "http://www.delhidailynews.com/news_image/1411997264Beyonce.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
  },
  {
    name: "Scarlett Johansson",
    photo:
      "https://vignette.wikia.nocookie.net/movie-ideas2293/images/c/ce/Scarlett_Johansson.jpg",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
  },
  {
    name: "Ashley Graham",
    photo:
      "https://media.glamour.com/photos/5a95d9b6fb204a1bd58401eb/master/pass/ashley-graham-revlon-getty.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
  },
  {
    name: "Lupita Nyong'o",
    photo:
      "https://peopledotcom.files.wordpress.com/2018/02/black-panther-3.jpg",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
  },
  {
    name: "Eva Mendes",
    photo:
      "https://peopledotcom.files.wordpress.com/2017/11/eva-mendes-feature.jpeg",
    scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
