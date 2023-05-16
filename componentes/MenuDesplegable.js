class MenuDesplegable extends React.Component {
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
            texto=" cerrar menu"
        }else{
            clase=" d-none";
            texto=" abrir menu"
        }

        return(
            
                <React.Fragment>
                        
                    <button className="desplegable2 " onClick={this.cambiarMostrar} ><i class="bi bi-layout-text-sidebar"></i>{texto}</button>
                    <div className="">
                        <div className = "row">
                            <a  onClick={this.cambiarMostrar}  className = {"col-3 item-desplegable"+clase} href="#inicio" >Inicio</a><div  className="col-9" ></div>
                            <a  onClick={this.cambiarMostrar}  className = {"col-3 item-desplegable"+clase} href="#sobre-mi" >Sobre mi</a><div  className="col-9" ></div>
                            <a  onClick={this.cambiarMostrar}  className = {"col-3 item-desplegable"+clase} href="#datos-personales" >Datos personales</a><div  className="col-9" ></div>
                            <a  onClick={this.cambiarMostrar}  className = {"col-3 item-desplegable"+clase} href="#cv" >CV</a><div  className="col-9" ></div>
                            <a  onClick={this.cambiarMostrar}  className = {"col-3 item-desplegable"+clase} href="#portfolio" >Portfolio</a><div  className="col-9" ></div>
                            <a  onClick={this.cambiarMostrar}  className = {"col-3 item-desplegable"+clase} href="#skills" >Skills</a><div  className="col-9" ></div>
                            <a  onClick={this.cambiarMostrar}  className = {"col-3 item-desplegable"+clase} href="#curriculum" >Formacion</a><div  className="col-9" ></div>

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


ReactDOM.render(<MenuDesplegable descripcion={cadenaspace} />,document.getElementById("menu-desplegable"));