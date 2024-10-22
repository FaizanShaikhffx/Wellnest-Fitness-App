export const exerciseOptions =   {
 method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '3f0b1b0090msh1a3eb926bc8e65ap13f6dajsn5d8cc18626c0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '766964f085msh86eb00b9313f6fep152eddjsn79c70f439cb2',
  },
};



export const fetchData = async (url, options) => { 
const response = await fetch(url, options);
const data = await response.json();

return data;
}
