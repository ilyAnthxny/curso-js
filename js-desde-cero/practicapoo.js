class Libro{
    constructor(titulo, autor, año, genero){
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }

    getAutor(){
        return this.autor
    }

    libroInfo(){
        return`${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} en el año ${this.año}`
    } 
}

let libros = [];

while(libros.length < 3){
    let titulo = prompt("Introduce el titulo del libro")
    let autor = prompt("Introduce el autor del libro")
    let año = prompt("Introduce el año del libro")
    let genero = prompt("Introduce el genero del libro").toLowerCase

    if(titulo !="" &&
     autor !="" &&
      !isNaN(año) &&
       año.length == 4 &&
       (genero == "aventura" || genero == "terror" || genero == "fantasia")){

        libros.push(new Libro(titulo, autor, año, genero))
    }
}

const showAllBooks = () =>{
    console.log(libros)
}

const showAutores = () =>{
    let autores = [];

    for(const libro of libros){
        autores.push(libro.getAutor())
    }

    console.log(autores.sort())
}

const showGenero = () => {
    const genero = prompt("Introduce el genero a buscar");

    for (const libro of libros){
        if(libro.getGenero() == genero){
            console.log(book.libroInfo())
        }
    }


}

// showAllBooks()
// showAutores()
showGenero()




