import './Navbar.css'

export function Navbar() {
    return(
        <nav className="Navbar">
            <input className='Navbar-Input' type="text" placeholder=""/>
            <h1 className="Navbar-Title">freeCodecamp</h1>
            <div className="Buttons-Container">
                <button className="Menu-Btn">Menú</button>
                <button className="Login-Btn">Iniciar sesión</button>
            </div>
        </nav>
    );
}