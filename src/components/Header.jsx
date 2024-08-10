const Header = () => {
    return (
        <header className="bg-blue-500 text-white">
            <div className="container mx-auto p-4 flex flex-wrap justify-around items-center">
                <div className="logo">
                    <img
                        src="/logo.png"
                        alt="Logo Águas Correntes"
                        className="max-h-12"
                    />
                </div>
                <div className="header-actions flex items-center space-x-4">
                    <i className="fas fa-cart-shopping text-2xl"></i>
                    <div className="login-section flex items-center space-x-2 ml-5">
                        <i className="fas fa-user text-xl"></i>
                        <span>Olá, Faça seu login</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
