import './Footer.css';
const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white">
            <div className="container mx-auto py-16 flex flex-wrap justify-around">
                <div className="topPart footer-content flex flex-wrap justify-around w-full relative">
                    <div className="footer-section w-full sm:w-1/3 mb-8">
                        <h3 className="text-lg font-bold mb-2 text-center">Sobre Nós</h3>
                        <p className="text-sm text-center">
                            Piscinas naturais e aquecidas, rampas e toboáguas, cachoeiras e cascatas naturais e artificiais,
                            trilhas naturais, área verde, lanchonetes e restaurante, e muito mais, tudo isso em pleno
                            contato com a natureza exuberante do Águas Correntes Park.
                        </p>
                    </div>

                    <div className="footer-section w-full sm:w-1/3 mb-8">
                        <h3 className="text-lg font-bold mb-2 text-center">Contato</h3>
                        <p className="text-sm text-center">
                            Rodovia BR 040 Km 05, DF 045 Km 06,<br />
                            Sentido Brasília-Valparaíso, Entrada Monumento Salúius<br />
                            Incra 9, Brasília, DF<br />
                            Tel: (61) 9 8136-3400<br />
                            <a href="mailto:atendimento@aguascorrentes.com.br" className="underline">
                                atendimento@aguascorrentes.com.br
                            </a>
                        </p>
                        <p className="text-sm text-center">
                            Horário de funcionamento: todos os dias das 9h às 17h, exceto às quartas-feiras. Quartas-feiras:
                            FECHADO.
                        </p>
                    </div>
                </div>

                <div className="footer-links flex flex-wrap justify-around py-8">
                    <div className="footer-column w-full sm:w-1/3 mb-8">
                        <h3 className="text-lg font-bold mb-2 text-center">Faça seu login</h3>
                        <ul className="text-center">
                            <li><a href="#" className="text-white hover:underline">Entrar</a></li>
                            <li><a href="#" className="text-white hover:underline">Cadastrar</a></li>
                        </ul>
                    </div>
                    <div className="footer-column w-full sm:w-1/3 mb-8">
                        <h3 className="text-lg font-bold mb-2 text-center">Compra Segura</h3>
                        <ul className="text-center">
                            <li><a href="#" className="text-white hover:underline">Política de cookies</a></li>
                            <li><a href="#" className="text-white hover:underline">Termo de Consentimento para Compras Online</a></li>
                            <li><a href="#" className="text-white hover:underline">Perguntas Frequentes</a></li>
                        </ul>
                    </div>
                    <div className="footer-column w-full sm:w-1/3 mb-8">
                        <h3 className="text-lg font-bold mb-2 text-center">Contato</h3>
                        <ul className="text-center">
                            <li><a href="#" className="text-white hover:underline">Fale Conosco</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Linha separadora antes do texto de copyright */}
            <div className="relative">
                <div className="border-t border-gray-700 absolute inset-x-0 bottom-0 w-full"></div>
                <div className="py-4 text-center bg-blue-600">
                    <p className="text-sm">Linber Software - a plataforma de soluções para o turismo e entretenimento.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
