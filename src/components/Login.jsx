// import { useState } from "react";

import Card from "./Card";

const Login = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto h-screen mt-[6rem]">
                <Card borderBottomColor="border-b-[#0088CC]">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <h2
                            className={`text-2xl font-semibold text-center mb-6 text-[#098CCE]`}
                        >
                            Já sou cliente
                        </h2>

                        <input
                            type="email"
                            required
                            placeholder="E-mail *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-[700px]"
                        />

                        <input
                            type="email"
                            required
                            placeholder="Senha *"
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-[700px]"
                        />

                        <a
                            href="#"
                            className="text-[#098CCE] self-start ml-[5rem]"
                        >
                            Esqueci minha Senha
                        </a>

                        <button className="px-[5rem] py-[.5rem] bg-[#E0E0E0] text-[#B4B4B4] text-[1.2rem] rounded-[4px] border-2 border-none">
                            CRIAR MINHA CONTA
                        </button>

                        <a href="/register" className="text-[#098CCE]">
                            Criar minha conta
                        </a>
                    </div>
                </Card>

                <p className="text-center mt-[4rem]">
                    Seus dados serão preservados. Em caso de dúvidas, acesse
                    nossa central de atendimento
                </p>
            </div>
        </>
    );
};

export default Login;
