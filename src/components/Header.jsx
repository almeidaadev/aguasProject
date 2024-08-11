import { useState } from "react";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };
    return (
        <header className="bg-blue-500 text-white">
            <div className="container max-w-[1300px] mx-auto p-4 flex flex-wrap justify-between items-center">
                <div className="logo">
                    <a href="/">
                        <img
                            src="/logo.png"
                            alt="Logo Águas Correntes"
                            className="max-h-12"
                        />
                    </a>
                </div>
                <div className="header-actions flex items-center space-x-4">
                    <i className="fas fa-cart-shopping text-2xl"></i>
                    <div className="login-section">
                        <a
                            href="#"
                            className="flex items-center space-x-2 ml-6"
                        >
                            <i className="fas fa-user text-xl mr-2"></i>

                            {/* Botão de login */}
                            <button
                                className="text-white font-bold "
                                onClick={handleLoginClick}
                            >
                                Olá, faça seu login
                            </button>

                            {/* Modal de login */}
                            {isModalOpen && (
                                <div className=" flex-col inset-0 bg-black bg-opacity-50 flex justify-end items-center z-999 fixed top-[5rem]">
                                    <div className="flex flex-col items-center bg-white w-[350px] h-[100%] p-6 rounded-lg absolute right-0 top-0 z-999">
                                        <h2 className="text-xl font-bold mb-4 text-white bg-blue-600 text-center absolute top-0 left-0 w-full p-[1rem]">
                                            Login
                                        </h2>

                                        <a
                                            href="/login"
                                            className="mt-[5rem] bg-blue-600 w-[80%] text-center rounded-[6px] text-white py-[.5rem] "
                                        >
                                            Entrar
                                        </a>

                                        <span className="mt-[1rem] w-[100%] text-black border-red-800 border-t-2">
                                            Codigo promocional
                                        </span>
                                    </div>
                                </div>
                            )}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
