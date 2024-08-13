import { useState, useEffect } from "react";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCloseModal = (event) => {
        // Fechar modal se o clique for no fundo opaco
        if (event.target.id === "modal-background") {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, [isModalOpen]);

    return (
        <>
            <header className="bg-blue-500 text-white relative z-10">
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
                        <a href="/meu-carrinho">
                            <i className="fas fa-cart-shopping text-2xl"></i>
                        </a>
                        <button
                            className="flex items-center space-x-2 ml-6 text-white font-bold"
                            onClick={toggleModal}
                        >
                            <i className="fas fa-user text-xl mr-2"></i>
                            <span className="hidden md:block">
                                Olá, faça seu login
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Modal de login */}
            {isModalOpen && (
                <div
                    id="modal-background"
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="flex flex-col bg-white w-[400px] h-full rounded-l-lg absolute right-0 top-[5rem] z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold text-white bg-blue-600 w-full p-4 text-center">
                            Faça seu login
                        </h2>
                        <div className="flex flex-col items-center p-6">
                            <a
                                href="/login"
                                className="bg-blue-600 text-white py-2 px-4 rounded-md w-full text-center my-4"
                            >
                                Entrar
                            </a>
                            <input
                                type="text"
                                placeholder="Código promocional"
                                className="p-2 w-full border-2 border-blue-200 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
