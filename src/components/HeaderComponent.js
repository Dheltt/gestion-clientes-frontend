import React from "react";

// Definimos un componente funcional llamado HeaderComponent.
// Los componentes funcionales son funciones de JavaScript que devuelven JSX.
export const HeaderComponent = () =>{
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="/" className="navbar-brand">gestion  de clientes</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;