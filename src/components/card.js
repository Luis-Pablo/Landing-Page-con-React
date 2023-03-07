const Card = (props) => {
    return (
        <div className="card" >
            <img src={props.img} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-success">Go somewhere</a>
            </div>
        </div>

            
        
           
    )
}


const CardImg = () => {
    return (

        
            <div class="row">
                <div class="col">
                    <Card img="https://los40.com/los40/imagenes/2021/05/21/moda/1621593719_062619_1621593917_gigante_normal.jpg" title="Thor" text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna" />
                </div>
                <div class="col">
                    <Card img="https://s1.eestatic.com/2019/08/29/como/como_hacer_425218735_133277764_1024x576.jpg" title="Thanos" text="Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna" />
                </div>
                <div class="col">
                    <Card img="https://images.hola.com/imagenes/mascotas/20221007218657/perros-consejos-adopcion-dn/1-149-28/consejos-decidir-adoptar-perro-t.jpg" title="Hulk" text=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
                </div>
                <div class="col">
                    <Card img="https://soyfotografodeperros.com/wp-content/uploads/2019/10/Cachorros-1.jpg" title="Nemo" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
                </div>
            </div>
       
        
    );
}
export default CardImg;
