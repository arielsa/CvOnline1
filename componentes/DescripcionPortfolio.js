class DescripcionPortfolio extends React.Component {
    constructor(props) {
       super(props);
       this.state={
        mostrar:false,
        indice:this.props.seleccion,
       };
       this.cambiarMostrar=this.cambiarMostrar.bind(this);
       this.pasarPoyecto = this.pasarPoyecto.bind(this);
       this.volverPoyecto = this.volverPoyecto.bind(this);
    }
    
   cambiarMostrar(){
    var mostrarActual=this.state.mostrar;
    this.setState(
        {mostrar:!mostrarActual}
    );
    this.setState(
        {indice:this.props.seleccion}
    );
   }

   volverPoyecto(){
    let tamaño = this.props.tamaño-1; //3  
    let indice = this.state.indice //1
    let proximoIndice=this.state.indice //1    
    if (indice == 1 ){proximoIndice = tamaño} else {proximoIndice--}
    this.setState(
        {indice:proximoIndice}
    );
}
pasarPoyecto(){
        let tamaño = this.props.tamaño-1;
        console.log(this.props.tamaño)
        let proximoIndice=this.state.indice
        let indice = this.state.indice 
        if (indice == tamaño ){proximoIndice = 1} else {proximoIndice++}
        //indice==tamaño?proximoIndice=2:proximoIndice++
        this.setState(
            {indice:proximoIndice}
        );  
}
pepe(){
    console.log(this.props);
}

    render() {

        var clase="";
        var texto="";
        if(this.state.mostrar){
            clase=" d-visible";
            texto=" mostrar -"
        }else{
            clase=" d-none";
            texto="mostrar +"
        }
        var n=this.state.indice

        

        return(
            
                <React.Fragment >
                        
                    <button className="desplegable3 " onClick={this.cambiarMostrar} >{texto}</button>                                               
            
                    <div className={" modal-pf-body "+clase}  >
                        <div className="modal-portfolio" >
                            <div className="contenedor0">    
                                <header className="" >{this.props.descripcion[n].titulo}</header>
                                <label onClick={this.cambiarMostrar} className="btn-mc label">x</label> 
                                <div className="contenido0">
                                    <img className = "imagen-modal" src={this.props.descripcion[n].imagen} alt=""></img>                                   
                                    <p className = " m3" > {this.props.descripcion[n].descripcion} </p>
                                    <p className = " m3">{this.props.descripcion[n].tecnologias}</p>
                                    <div className="container" >
                                        <div className="row" >
                                        <a className="abrir-desc col-4" onClick={this.volverPoyecto} ><i class="fa-solid fa-caret-left"></i></a>
                                        <a for="btn-modal " onClick={this.cambiarMostrar} class="abrir-desc col-4 " target="_blank" href={this.props.descripcion[n].linkW}>IR AL SITIO</a> 
                                        <a className="abrir-desc col-4" onClick={this.pasarPoyecto} ><i class="fa-solid fa-caret-right"></i></a>
                                        </div>
                                    </div>                              
                                    
                                    <a for="btn-modal " onClick={this.cambiarMostrar} class="abrir-desc" target="_blank" href={this.props.descripcion[n].linkGh}>IR AL REPOSITORIO</a>                                    
                                </div>
                            </div>
                        </div>                        
                    </div>
                </React.Fragment>
        );
    }
}

var proyectos = [
    {},
    {
        titulo : 'Space Tursim',
        descripcion :'Esta pagina de viajes espaciales es una SPA propuesta como challenge de Frontend Mentor.',
        tecnologias:'Tecnologias: React.js, Bootstrap, HTML y CSS ',
        linkGh:'https://github.com/arielsa/spaceapp',
        linkW:'https://arielsa.github.io/spaceapp/',
        imagen:'./img/pantalla-spacenav.png',
    },
    {
        titulo : 'Pelist',
        descripcion :'Esta APP consume la API de TMDB para exponer listados de peliculas y poder crear listas en Firestore DB',
        tecnologias:'Tecnologias: React.js, Firebase, HTML y CSS ',
        linkGh:'https://github.com/arielsa/proyecto-final-react',
        linkW:'https://pelistadora-6ec55.web.app/',
        imagen:'./img/pantalla-pelist.png',
    },
    {
        titulo : 'ToDo Machine',
        descripcion :'Esta App crea listas de tareas editables en el LocalStorage.',
        tecnologias:'tecnologias: React.js, Bootstrap, HTML y CSS ',
        linkGh:'https://github.com/arielsa/ToDoMachine',
        linkW:'https://arielsa.github.io/ToDoMachine/',
        imagen:'./img/pantalla-todo.png',
    }
]
var tamaño = proyectos.length;

ReactDOM.render(<DescripcionPortfolio descripcion={proyectos} seleccion = {1} tamaño ={tamaño} />,document.getElementById("descripcion-space"));
ReactDOM.render(<DescripcionPortfolio descripcion={proyectos} seleccion = {2} tamaño ={tamaño} />,document.getElementById("descripcion-pelist"));
ReactDOM.render(<DescripcionPortfolio descripcion={proyectos} seleccion = {3} tamaño ={tamaño} />,document.getElementById("descripcion-todo"));