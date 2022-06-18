
const API = "http://localhost:3030/api/libros"

function GetLibros(path) {
  return (
    fetch( API + path)
    .then(results => results.json())
    .catch(err => console.log(err))
  );

  }

export default GetLibros;