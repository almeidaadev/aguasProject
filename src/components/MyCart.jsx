import Card from "./Card";
const MyCart = () => {
    return (
        <div className="max-w-[1440px] mx-auto p-6 bg-gray-100">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                Meu carrinho
            </h2>

            <Card borderBottomColor="border-b-[#0088CC]">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                    Ingressos
                </h3>

                <div className="flex bg-white shadow-lg rounded-lg p-4 mb-4 relative">
                    <div className="flex items-center">
                        <img
                            className="w-[150px]  rounded-lg object-cover"
                            src="/public/m-Z8gvOCnQO4.webp"
                            alt="Ingresso Adulto"
                        />

                        <div className=" ml-4 flex-1">
                            <div className="flex gap-[3rem]">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            INGRESSO ADULTO
                                        </h4>
                                        <p className="text-blue-600 font-bold">
                                            R$ 49,00
                                        </p>
                                    </div>
                                    <button className="text-red-600 hover:text-red-800 absolute right-14 bottom-5">
                                        Remover
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        <strong>País:</strong> Brasil
                                    </p>
                                    <p>
                                        <strong>Estado:</strong> Goiás
                                    </p>
                                    <p>ÁGUAS CORRENTES PARK</p>
                                    <p>
                                        <strong>Data:</strong> 27/08/2024
                                        &nbsp;&nbsp; <strong>Horário:</strong>{" "}
                                        00:01 às 17:00
                                    </p>
                                    <p className="font-semibold">
                                        <strong>Categorias</strong>
                                    </p>
                                    <ul className="list-disc pl-4 text-blue-600">
                                        <li>(1) Day Use - Adulto</li>
                                    </ul>
                                </div>
                                <div className="flex items-center">
                                    <span className="ml-[5rem] block">
                                        Horário: 00:01 às 17:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex justify-between">
                    <div className="flex justify-between items-center mb-6">
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
        </div>
    );
};

export default MyCart;
