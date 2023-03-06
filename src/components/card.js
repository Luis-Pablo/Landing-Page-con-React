


const  Imagen = (props) => {
    return (
        <div class="card" style="width: 18rem;">
            <img src={props.imagen} class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title">{props.titulo }</h5>
                <p class="card-text">{props.texto }</p>
                <a href="#" class="btn btn-primary">{props.boton }</a>
                </div>
        </div>
    );
}

const Card = () => {
    return (
        <div className="row">
            <Imagen imagen="https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/mascotas-en-adopcion-beneficios-y-requisitos-para-adoptar-un-perro-o-gato.png?itok=LL5wHzuQ" titulo="Thor" texto="Mi nombre es Thor y tengo" boton="Adoptame"/>
            <Imagen imagen="" titulo="Hulk" texto="Mi nombre es Thor y tengo" boton="Adoptame" />
            <Imagen imagen="" titulo="Thanos" texto="Mi nombre es Thor y tengo" boton="Adoptame" />
            <Imagen imagen="" titulo="Nemo" texto="Mi nombre es Thor y tengo" boton="Adoptame" />
        </div>
    )
}

export default Card;