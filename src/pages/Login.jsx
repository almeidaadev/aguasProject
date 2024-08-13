import { useState } from "react";
import Card from "../components/Card";

const Login = () => {
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleForgotPasswordClick = () => {
        setIsForgotPasswordOpen(true);
    };

    const handleCloseForgotPassword = () => {
        setIsForgotPasswordOpen(false);
        setEmail("");
        setEmailError("");
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    };

    const handleEmailSubmit = () => {
        if (!email) {
            setEmailError("Informe um e-mail válido");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Informe um e-mail válido");
        } else {
            console.log("Enviar link de redefinição de senha para:", email);
        }
    };

    return (
        <>
            <div className="max-w-4xl mx-auto h-screen mt-[6rem] px-4 sm:px-6 lg:px-8">
                <Card borderBottomColor="border-b-[#0088CC]">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <h2 className="text-2xl font-semibold text-center mb-6 text-[#098CCE]">
                            Já sou cliente
                        </h2>

                        <input
                            type="email"
                            required
                            placeholder="E-mail *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full sm:w-[500px] lg:w-[700px]"
                        />

                        <input
                            type="password"
                            required
                            placeholder="Senha *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full sm:w-[500px] lg:w-[700px]"
                        />

                        <button
                            className="text-[#098CCE] self-start sm:ml-[2rem] lg:ml-[5rem]"
                            onClick={handleForgotPasswordClick}
                        >
                            Esqueci minha Senha
                        </button>

                        <button className="px-[3rem] sm:px-[4rem] lg:px-[5rem] py-[.5rem] bg-[#E0E0E0] text-[#B4B4B4] text-[1.2rem] rounded-[4px] border-2 border-none">
                            CRIAR MINHA CONTA
                        </button>

                        <a href="/register" className="text-[#098CCE]">
                            Criar minha conta
                        </a>
                    </div>
                </Card>

                <p className="text-center mt-[4rem] text-sm sm:text-base">
                    Seus dados serão preservados. Em caso de dúvidas, acesse
                    nossa central de atendimento
                </p>
            </div>

            {/* Modal de Esqueci Minha Senha */}
            {isForgotPasswordOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white w-[90%] sm:w-[600px] p-6 rounded-lg shadow-lg relative z-30">
                        <h2 className="text-xl font-bold mb-4 text-[#0078b8]">
                            Esqueci a senha
                        </h2>
                        <p className="mb-4 text-sm text-gray-700">
                            Insira o endereço de e-mail associado à sua conta
                            que lhe enviaremos um link de redefinição de senha.
                        </p>
                        <input
                            id="emailForgot"
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="E-mail *"
                            className={`outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 ${
                                emailError
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } w-full mb-2`}
                        />
                        {emailError && (
                            <span className="text-red-500 text-sm">
                                {emailError}
                            </span>
                        )}
                        <div className="flex justify-between gap-4 mt-4">
                            <button
                                className="bg-white border border-[#098CCE] text-[#098CCE] py-2 px-4 rounded-lg hover:bg-gray-100 w-full"
                                onClick={handleCloseForgotPassword}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-[#098CCE] text-white py-2 px-4 rounded-lg hover:bg-[#0078b8] w-full"
                                onClick={handleEmailSubmit}
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
