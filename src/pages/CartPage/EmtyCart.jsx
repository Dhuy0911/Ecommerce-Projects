const EmtyCart = () => {

    return <div className="cartMain">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="emtyCart-wrapper text-center">
                        <h1 className="fw-bold" >Shopping Cart</h1>
                        <div className="emtyCartImg">
                            <img src={process.env.PUBLIC_URL + "/assets/images/emtycart.avif"} alt="" style={{
                                width:'12rem',
                                margin: '2rem'
                            }} />
                        </div>
                        <h4>Your cart is currently empty!</h4>
                    </div>
                </div>
            </div>
        </div>  
    </div>
}

export default EmtyCart