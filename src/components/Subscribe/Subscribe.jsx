import '../Subscribe/Subscribe.css';

const Subscribe = () => {
    return <div>
        <section id="subscribeTitle">
            <div className="subscribe__wrapper text-center">
                <h1>Get <span> 20% Off </span> Your Next Order</h1>
                <div className="subscribe-input">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </section>

    </div>
}

export default Subscribe;