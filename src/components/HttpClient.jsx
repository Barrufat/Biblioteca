
const API = "http://localhost:3030/api/libros/"

function GetLibros(path) {
    fetch( API + path)
      .then(results => results.json())
      .catch(err => console.log(err));
      console.log(libros);
  }

export default GetLibros;