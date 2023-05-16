class DescripcionPortfolio extends React.Component {
    constructor(props) {
       super(props);
       this.state={
        mostrar:false
       };
       this.cambiarMostrar=this.cambiarMostrar.bind(this);
      
    }
    
   cambiarMostrar(){
    var mostrarActual=this.state.mostrar;
    this.setState(
        {mostrar:!mostrarActual}
    );
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

        return(
            
                <React.Fragment>
                        
                    <button className="desplegable " onClick={this.cambiarMostrar} >{texto}</button>                                               
            
                    <div className={" modal-pf-body "+clase}  >
                        <div className="modal-portfolio" >
                            <div className="contenedor0">    
                                <header>{this.props.descripcion.titulo}</header>
                                <label onClick={this.cambiarMostrar} class="btn-mc label">x</label>    
                                <div className="contenido0">
                                    <img className = "imagen-modal" src={this.props.descripcion.imagen} alt=""></img>                                   
                                    <p className = " m3" > {this.props.descripcion.descripcion} </p>
                                    <p className = " m3">{this.props.descripcion.tecnologias}</p>
                                    <a for="btn-modal " onClick={this.cambiarMostrar} class="abrir-desc" target="_blank" href={this.props.descripcion.linkGh}>IR AL SITIO</a>
                                    <a for="btn-modal " onClick={this.cambiarMostrar} class="abrir-desc" target="_blank" href={this.props.descripcion.linkW}>IR AL REPOSITORIO</a>                                    
                                </div>
                            </div>
                        </div>                        
                    </div>
                </React.Fragment>
        );
    }
}

var cadenaspace={
    titulo : 'Space Tursim',
    descripcion :'Esta pagina de viajes espaciales es una SPA propuesta como challenge de Frontend Mentor.',
    tecnologias:'tecnologias: React.js, Bootstrap, HTML y CSS ',
    linkGh:'https://arielsa.github.io/spaceapp/',
    linkW:'https://arielsa.github.io/spaceapp/',
    imagen:'./img/pantalla-spacenav.png',
}


ReactDOM.render(<DescripcionPortfolio descripcion={cadenaspace} />,document.getElementById("descripcion-space"));
