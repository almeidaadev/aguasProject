import { useState } from "react";
import Card from "../components/Card";

const MyCart = () => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const handleRemoveClick = () => {
        setIsConfirmModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsConfirmModalOpen(false);
    };

    const handleConfirmRemove = () => {
        // Lógica para remover o item do carrinho
        console.log("Item removido do carrinho");

        setIsConfirmModalOpen(false);
    };

    return (
        <div className="max-w-[1440px] mx-auto p-6 bg-gray-100">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                Meu carrinho
            </h2>

            <Card borderBottomColor="border-b-[#0088CC]">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                    Ingressos
                </h3>

                <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-4 mb-4 relative">
                    <div className="flex-shrink-0">
                        <img
                            className="w-full lg:w-[150px] rounded-lg object-cover"
                            src="/public/m-Z8gvOCnQO4.webp"
                            alt="Ingresso Adulto"
                        />
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[3rem]">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-lg">
                                        INGRESSO ADULTO
                                    </h4>
                                    <p className="text-blue-600 font-bold">
                                        R$ 49,00
                                    </p>
                                </div>
                                <button
                                    className="text-red-600 hover:text-red-800 mt-4 lg:mt-0 lg:absolute lg:right-14 lg:bottom-5"
                                    onClick={handleRemoveClick}
                                >
                                    Remover
                                </button>
                            </div>
                            <div className="mt-4 lg:mt-0">
                                <p>
                                    <strong>País:</strong> Brasil
                                </p>
                                <p>
                                    <strong>Estado:</strong> Goiás
                                </p>
                                <p>ÁGUAS CORRENTES PARK</p>
                                <p>
                                    <strong>Data:</strong> 27/08/2024
                                    &nbsp;&nbsp; <strong>Horário:</strong> 00:01
                                    às 17:00
                                </p>
                                <p className="font-semibold">
                                    <strong>Categorias</strong>
                                </p>
                                <ul className="list-disc pl-4 text-blue-600">
                                    <li>(1) Day Use - Adulto</li>
                                </ul>
                            </div>
                            <div className="flex items-center mt-4 lg:mt-0">
                                <span className="lg:ml-[5rem] block">
                                    Horário: 00:01 às 17:00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="mb-6 lg:mb-0 flex justify-between items-center">
                        <p className="text-lg font-bold text-[1.5rem] self-end text-[#2F8DCE]">
                            Total:{" "}
                            <span className="text-[#2F8DCE]">R$ 49,00</span>
                        </p>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            REGISTRAR-SE E FINALIZAR PEDIDO
                        </button>
                        <button className="w-full text-blue-600 hover:underline">
                            CONTINUAR COMPRANDO
                        </button>
                    </div>
                </div>
            </Card>

            {/* Modal de Confirmação */}
            {isConfirmModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white w-[90%] sm:w-[400px] p-6 rounded-lg shadow-lg text-center relative z-30">
                        <h2 className="text-xl font-bold mb-4 text-[#0078b8]">
                            Confirmação
                        </h2>
                        <p className="mb-6">
                            Deseja remover o passeio de seu carrinho?
                        </p>
                        <div className="flex justify-between">
                            <button
                                className="bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100 w-1/2 mr-2"
                                onClick={handleCloseModal}
                            >
                                Não
                            </button>
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-1/2 ml-2"
                                onClick={handleConfirmRemove}
                            >
                                Sim
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCart;
