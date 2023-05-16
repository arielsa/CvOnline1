class Descripcion extends React.Component {
    constructor(props) {
       super(props);
       this.state={
        mostrar:true
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
            texto="mostrar -"
        }else{
            clase=" d-none";
            texto="mostrar +"
        }

        return(
            
                <React.Fragment>
                    
                    <button class="desplegable " onClick={this.cambiarMostrar} > <i class="fa-brands fa-react"></i> {texto}</button>                                               
        
                    <p class={"d-visible"+clase}>
                        {this.props.descripcion}
                    </p>
                </React.Fragment>
        );
    }
}

var cadenauai="El propósito que ha orientado el desarrollo del plan de estudios de esta carrera es formar profesionales que diseñen soluciones virtuales a problemas reales, aplicando los conocimientos de las distintas áreas: Hardware, Software y Telecomunicaciones. Asimismo, que adquieran sobre bases científicas y tecnológicas las competencias y actitudes que garanticen un sólido desempeño profesional y puedan responder de manera rápida y eficaz a los cambios en las concepciones y paradigmas de la ciencia, la organización y la producción."
var cadenait="El area informatca-tecnologica exigue una constante capacitacion y actualizacion de tecnicas, recursos y conocimientos. Debido a esto, constantemente recurro a diversas plataformas e instituciones de capacitacion donde logro profundizar conocimientos y/o adquirir otros nuevos."
var cadenaunla="Carrera de grado Centrada en formar profesionales que con herramientas analítico-teóricas y practicas puedan generar productos que respondan a determinadas problemáticas de un usuario especifico o de un conjunto social. Un diseñador con su preparación y conocimientos contribuye al mejoramiento de la calidad de vida de las personas. Participa en la definición de los aspectos estéticos, funcionales y productivos del objeto e incrementa su valor. El diseño por su definición etimológica es la ciencia de “dar sentido”. El perfil profesional de un diseñador se caracteriza por poder inferir soluciones optimizadas y funcionales a diversas problemáticas identificadas en un proceso de análisis de usuarios."
var cadenasanbo="Secundaria tecnica ubicada en Sirito 370, Lomas de Zamora, Argentina -DIEGEP 4405, Obispado de Lomas de Zamora. Ciencia, tecnología y exelencia."


ReactDOM.render(<Descripcion descripcion={cadenauai} />,document.getElementById("descripcion-uai"));
ReactDOM.render(<Descripcion descripcion={cadenait}/>,document.getElementById("descripcion-it"));
ReactDOM.render(<Descripcion descripcion={cadenaunla}/>,document.getElementById("descripcion-unla"));
ReactDOM.render(<Descripcion descripcion={cadenasanbo}/>,document.getElementById("descripcion-sanbo"));