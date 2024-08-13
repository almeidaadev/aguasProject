import Card from "../components/Card";

const RegisterForm = ({ email }) => {
    return (
        <div className="max-w-4xl mx-auto h-screen mt-[6rem] px-4 sm:px-6 lg:px-8">
            <Card borderBottomColor="border-b-[#0088CC]">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold text-center mb-4 text-[#098CCE]">
                        Criar minha conta
                    </h2>
                    <input
                        type="email"
                        required
                        defaultValue={email}
                        placeholder="E-mail *"
                        className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full"
                        disabled
                    />
                    <div className="flex gap-4">
                        <input
                            type="password"
                            required
                            placeholder="Senha *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full"
                        />
                        <input
                            type="password"
                            required
                            placeholder="Confirmar senha *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full"
                        />
                    </div>
                    <input
                        type="text"
                        required
                        placeholder="Nome completo *"
                        className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full"
                    />
                    <div className="flex gap-4">
                        <select
                            required
                            className="outline-none p-[1.2rem] rounded-[4px] border-2 border-gray-300 w-full"
                        >
                            <option value="" disabled selected>
                                País*
                            </option>
                            <option value="br">Brasil</option>
                            <option value="us">Estados Unidos</option>
                            <option value="other">Outro</option>
                        </select>
                        <input
                            type="text"
                            required
                            placeholder="Telefone *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="date"
                            required
                            placeholder="Nascimento *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Tipo de Documento *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="turismo"
                            className="h-4 w-4"
                        />
                        <label htmlFor="turismo" className="text-sm">
                            Trabalho em áreas de atuação do turismo
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="consent"
                            required
                            className="h-4 w-4"
                        />
                        <label htmlFor="consent" className="text-sm">
                            Eu concordo com o{" "}
                            <a href="#" className="text-[#098CCE]">
                                Termo de Consentimento para Compras Online
                            </a>
                        </label>
                    </div>
                    <button className="px-[3rem] sm:px-[4rem] lg:px-[5rem] py-[.5rem] bg-[#E0E0E0] text-[#B4B4B4] text-[1.2rem] rounded-[4px] border-2 border-none mt-4">
                        Cadastrar
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default RegisterForm;
