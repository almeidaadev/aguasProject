
import Card from "./components/Card";

const App = () => {
    return (
        <main className="max-w-[1440px] mx-auto py-[4rem]">
            <Card>
                <div className="flex gap-12 items-start">
                    <div className="flex-shrink-0">
                        <h1 className="text-[22px] font-bold leading-[32px] tracking-[0.28px] mb-8">
                            Ingresso Adulto
                        </h1>
                        <img
                            className="rounded-[1rem]"
                            src="m-Z8gvOCnQO4.webp"
                            alt=""
                        />
                    </div>
                    <div className="flex-grow mt-8">
                        <p className="font-extrabold text-gray-900 mb-4">
                            Pagando em PIX tem desconto! Use o cupom PIX5 e
                            ganhe 5% de desconto no seu ingresso
                            <span className="text-highlight block">
                                Importante
                            </span>
                        </p>
                        <p className="leading-[1.4rem]">
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
                        <h2 className="mt-8 font-bold text-xl">
                            Valores de Bilheteria
                        </h2>
                        <ul className="list-disc ml-4">
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
                        <h2 className="mt-8 font-bold text-xl">Horários</h2>
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

            <Card borderBottomColor="border-b-[#0088CC]">
                <section>
                    <h2 className="text-2xl font-bold text-[#0088CC]">
                        Pagando em PIX tem 5% de desconto
                    </h2>
                    <p className="leading-[1.4rem] mt-4">
                        Após incluir os ingressos no carrinho, selecione a opção
                        de pagamento: PIX. Inserindo o código: PIX5 receba 5% de
                        desconto.
                    </p>
                </section>
            </Card>

            <Card borderBottomColor="border-b-[#0088CC]">

            </Card>
        </main>
    );
};

export default App;
