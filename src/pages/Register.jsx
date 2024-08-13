import { useState } from "react";
import Card from "../components/Card";
import RegisterForm from "./RegisterForm";

const Register = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [email, setEmail] = useState("");

    const handleCreateAccount = () => {
        setIsFormVisible(true);
    };

    if (isFormVisible) {
        return <RegisterForm email={email} />;
    }

    return (
        <>
            <div className="max-w-4xl mx-auto h-screen mt-[6rem] px-4 sm:px-6 lg:px-8">
                <Card borderBottomColor="border-b-[#0088CC]">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <h2 className="text-2xl font-semibold text-center mb-6 text-[#098CCE]">
                            Criar minha conta
                        </h2>

                        <input
                            type="email"
                            required
                            placeholder="E-mail *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="outline-none p-[1.2rem] rounded-[4px] placeholder:text-[#000000] border-2 border-gray-300 w-full sm:w-[500px] lg:w-[700px]"
                        />

                        <button
                            className="px-[3rem] sm:px-[4rem] lg:px-[5rem] py-[.5rem] bg-[#E0E0E0] text-[#B4B4B4] text-[1.2rem] rounded-[4px] border-2 border-none"
                            onClick={handleCreateAccount}
                        >
                            CRIAR MINHA CONTA
                        </button>

                        <a href="/login" className="text-[#098CCE]">
                            Já sou cliente
                        </a>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Register;
