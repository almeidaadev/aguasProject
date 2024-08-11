import { useState } from "react";
import Calendar from "./components/Calendar";
import Card from "./components/Card";
import "./App.css";

const App = () => {
    const [selectedPrice, setSelectedPrice] = useState(
        "Nenhum preço selecionado"
    );
    const [showVisitorCard, setShowVisitorCard] = useState(false);

    const handlePriceSelect = (price) => {
        setSelectedPrice(price);
    };

    const handleButtonClick = () => {
        setShowVisitorCard(true);
    };

    const closeVisitorCard = () => {
        setShowVisitorCard(false);
    };

    return (
        <main className="max-w-[1440px] mx-auto p-4 lg:p-8">
            {/* Seção do ingresso adulto */}
            <Card borderBottomColor="border-b-[#0088CC]">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                    <div className="flex-shrink-0 w-full lg:w-1/2">
                        <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">
                            Ingresso Adulto
                        </h1>
                        <img
                            className="rounded-lg w-full lg:w-auto"
                            src="m-Z8gvOCnQO4.webp"
                            alt="Ingresso Adulto"
                        />
                    </div>
                    <div className="flex-grow mt-4 lg:mt-0">
                        <p className="font-extrabold text-gray-900 mb-4">
                            Pagando em PIX tem 5% de desconto
                        </p>
                        <p className="leading-6">
                            Este ingresso é vendido somente no e-commerce. Este
                            ingresso dá direito a{" "}
                            <span className="font-extrabold">
                                01 ingresso Adulto
                            </span>
                            .
                            <br /> - Lotes Limitados, sujeito a alteração de
                            valores sem aviso prévio.
                            <br /> - Gratuidade: Crianças até 4 anos e 11 meses
                            e 29 dias
                        </p>
                        <h2 className="mt-6 lg:mt-8 font-bold text-lg lg:text-xl">
                            Valores de Bilheteria
                        </h2>
                        <ul className="list-disc ml-4 space-y-2">
                            <li>Adulto - R$ 80,00 - Acima de 11 anos</li>
                            <li>Infantil - R$ 60,00 - De 05 a 11 anos</li>
                            <li>
                                Sênior - R$ 40,00 - Acima de 60 anos e PNE /
                                TEA*
                            </li>
                            <li>
                                *Necessário apresentar carteirinha BPC ou
                                CIPTEA.
                            </li>
                        </ul>
                        <h2 className="mt-6 lg:mt-8 font-bold text-lg lg:text-xl">
                            Horários
                        </h2>
                        <p>
                            Parque: 09h00 às 17h00
                            <br />
                            <br />
                            Qualquer problema ao realizar a compra, por
                            gentileza entrar em contato (61) 3030-4300.
                            <br />
                            <br />
                            Boa compra e bom divertimento!
                        </p>
                        <p className="font-extrabold text-gray-900">
                            Não esqueça de trazer o seu QR Code do ingresso
                            impresso ou salvo no aparelho para apresentar na
                            bilheteira no dia da sua visita!
                        </p>
                        <span
                            id="availability"
                            className="block text-right mt-4"
                        >
                            A partir de
                        </span>
                    </div>
                </div>
            </Card>

            {/* Seção de desconto com PIX */}
            <Card borderBottomColor="border-b-[#0088CC]">
                <section>
                    <h2 className="text-xl lg:text-2xl font-bold text-[#0088CC]">
                        Pagando em PIX tem 5% de desconto
                    </h2>
                    <p className="leading-6 mt-4">
                        Após incluir os ingressos no carrinho, selecione a opção
                        de pagamento: PIX. Inserindo o código: PIX5 receba 5% de
                        desconto.
                    </p>
                </section>
            </Card>

            {/* Seção do calendário e horários */}
            <Card borderBottomColor="border-b-[#0088CC]">
                <div className="flex p-[2rem] flex-col lg:flex-row gap-8 lg:gap-12 items-center relative">
                    <div className="p-4 lg:p-8 flex flex-col items-center border-b-[#757B89] border-dashed bg-gray-100 border-2 lg:border-b-0 lg:border-r-[#757B89] lg:border-dashed w-full lg:w-1/2">
                        <h2 className="text-[#0088CC] font-bold text-lg lg:text-xl absolute top-0 left-0">
                            AGUAS CORRENTES PARK
                        </h2>
                        <img
                            className="w-[30px] mb-4"
                            src="/public/date_range.svg"
                            alt="Calendário"
                        />
                        <Calendar onPriceSelect={handlePriceSelect} />
                    </div>

                    <div className="flex flex-col mx-[auto] gap-5 lg:gap-8 items-center py-[6rem]">
                        <i className="fa-regular fa-clock text-3xl text-[#8B8B8B]"></i>
                        <h1 className="text-[#8B8B8B] text-lg lg:text-xl">
                            em qual Horário
                        </h1>
                        <i className="fa-solid fa-arrow-down text-[#8B8B8B]"></i>
                    </div>

                    <button
                        className="absolute right-4 bottom-4 bg-[#E0E0E0] text-[#8B8B8B] font-bold py-2 px-4 rounded"
                        onClick={handleButtonClick}
                    >
                        PRÓXIMO <i className="fa-solid fa-arrow-down ml-2"></i>
                    </button>
                </div>
            </Card>

            {/* Seção do visitante */}
            <Card borderBottomColor="border-b-[#0088CC]">
                <h2
                    className={`text-lg lg:text-xl font-bold ${
                        showVisitorCard ? "text-[#0088CC]" : "text-[#0000008A]"
                    }`}
                >
                    Quem irá visitar?
                </h2>

                {showVisitorCard && (
                    <div className="flex flex-col gap-4 mt-4">
                        <h3 className="pb-4 border-b-2 border-[#ccc] text-lg">
                            Day Use - Adulto ({selectedPrice})
                        </h3>
                        <input
                            type="text"
                            placeholder="Pais de origem do visitante"
                            className="outline-none p-3 rounded border-2 border-gray-300 w-full lg:w-[700px]"
                        />

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={closeVisitorCard}
                                className="bg-[#0088CC] text-white py-2 px-4 rounded"
                            >
                                Voltar
                            </button>
                            <button className="bg-[#0088CC] text-white py-2 px-4 rounded">
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                )}
            </Card>
        </main>
    );
};

export default App;
