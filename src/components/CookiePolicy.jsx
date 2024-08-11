const CookiePolicy = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
            <p className="mb-4">
                O objetivo da presente página é apresentar ao usuário a política
                de cookies (tecnologias de armazenamento de dados do seu
                navegador) que é utilizada em nosso site, bem como informar
                sobre o uso de cookies.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                O QUE SÃO COOKIES?
            </h2>
            <p className="mb-4">
                Os cookies são pequenas unidades de dados armazenadas por seu
                navegador em seu terminal para salvar determinadas informações,
                geralmente possuindo um formato de texto. Quando você voltar a
                acessar nosso site a partir do mesmo terminal, as informações
                armazenadas nos cookies serão novamente enviadas para nosso site
                (“cookies originais”) ou para outro site aos quais os cookies
                pertencem (“cookies de terceiros”).
            </p>
            <p className="mb-4">
                Através da informação que é salva e devolvida, os sites são
                capazes de reconhecer quem já acessou o site e o visitou usando
                o navegador em seu terminal.
            </p>
            <p className="mb-4">
                A utilização de cookies por parte da empresa AGUAS CORRENTES
                PARK é unicamente para exibir a nossa página de maneira
                otimizada e de acordo com suas preferências! Assim, apenas os
                próprios cookies são identificados em seu terminal, sem que haja
                a identificação do usuário. Além disso, seus dados pessoais
                apenas serão guardados mediante o seu consentimento expresso ou
                se tal for estritamente necessário para poder usar os serviços
                oferecidos a e acessados por você.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                TIPOS DE COOKIES
            </h2>
            <p className="mb-4">
                Dependendo do objetivo e da função, os cookies são subdivididos
                nas seguintes categorias:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
                Cookies estritamente necessários
            </h3>
            <p className="mb-4">
                Os cookies estritamente necessários, como a nomenclatura o
                define, são aqueles que asseguram as funções sem as quais não é
                possível utilizar nossas páginas conforme pretendido. Estes
                cookies apenas são utilizados por nós, portanto, são “cookies
                originais”. Isto significa que toda a informação que está
                guardada nos cookies é enviada de volta para nosso site.
            </p>
            <p className="mb-4">
                Um dos exemplos mais utilitários dos cookies necessários é, por
                exemplo, para assegurar que você tenha sempre a sessão iniciada
                como usuário registrado quando acessa as várias subpáginas de
                nosso site, sem precisar iniciar sessão toda a cada vez que
                acessa uma página nova.
            </p>
            <p className="mb-4">
                Entretanto, a informação mais fundamental acerca dos cookies
                estritamente necessários, é que sua utilização não requer o
                consentimento do usuário. Por esse motivo, não é possível ativar
                ou desativar individualmente os cookies estritamente
                necessários, a não ser diretamente pelo navegador do usuário.
            </p>

            <h4 className="text-lg font-semibold mt-4 mb-2">
                Cookies estritamente necessários:
            </h4>
            <table className="min-w-full bg-white mb-8">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nome</th>
                        <th className="py-3 px-6 text-left">
                            Descrição do Cookie
                        </th>
                        <th className="py-3 px-6 text-left">Vida útil</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">savedCookies</td>
                        <td className="py-3 px-6 text-left">
                            É o cookie primário que registra o consentimento do
                            usuário para o uso dos cookies ao aceitar e
                            rejeitar. Ele não rastreia nenhum dado pessoal e é
                            definido apenas mediante ação do usuário (aceitar /
                            rejeitar).
                        </td>
                        <td className="py-3 px-6 text-left">1 ano</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">
                            security_storage | personalization_storage |
                            functionality_storage | ad_storage |
                            analytics_storage
                        </td>
                        <td className="py-3 px-6 text-left">
                            Registra o estado do botão padrão da categoria
                            correspondente. Ele funciona apenas em coordenação
                            com o cookie principal (savedCookies).
                        </td>
                        <td className="py-3 px-6 text-left">1 ano</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-6 mb-4">
                Cookies de funcionalidade
            </h3>
            <p className="mb-4">
                Os cookies de funcionalidade permitem que nosso site guarde
                informações que já foram fornecidas pelo usuário e, com base
                nisso, oferecer funcionalidades otimizadas e personalizadas.
                Estes cookies apenas recolhem e guardam informações
                anônimizadas, sem identificar o usuário, e sua utilização é
                estritamente exclusiva no nosso site.
            </p>
            <h4 className="text-lg font-semibold mt-4 mb-2">
                Cookies de funcionalidade:
            </h4>
            <table className="min-w-full bg-white mb-8">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nome</th>
                        <th className="py-3 px-6 text-left">
                            Descrição do Cookie
                        </th>
                        <th className="py-3 px-6 text-left">Vida útil</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">_ga</td>
                        <td className="py-3 px-6 text-left">
                            Google Analytics - Usado para distinguir usuários.
                        </td>
                        <td className="py-3 px-6 text-left">1 ano</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-6 mb-4">
                Cookies de desempenho
            </h3>
            <p className="mb-4">
                Além disso, são registradas também as atividades, os “cliques” e
                o deslocamento que é feito com o mouse do computador, para que
                possamos perceber quais as áreas de nosso site que suscitam
                maior interesse aos usuários. Deste modo, podemos ajustar o
                conteúdo de nosso site às necessidades de nossos usuários, de
                forma direcionada, e otimizar aquilo que temos a oferecer.
            </p>
            <p className="mb-4">
                As informações referentes ao endereço de IP de seu computador,
                transmitido por motivos técnicos, é automaticamente anonimizada
                e não permite que se tenha qualquer tipo de conclusão sobre o
                usuário individual.
            </p>
            <p className="mb-4">
                Informamos que atualmente não utilizamos nenhum tipo de Cookie
                de desempenho nessa página.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                CONSENTIMENTO PARA O USO DE COOKIES
            </h2>
            <p className="mb-4">
                Os cookies que não são estritamente necessários para os serviços
                em nosso site, apenas aqueles classificados como estritamente
                necessários, e as informações de cookies apenas serão usados
                após o seu consentimento. Ao usar ativamente nosso site, você
                consente com o uso de cookies, se continuar a navegar em nosso
                site depois da exibição da barra de cookies. Ao identificar o
                primeiro acesso de sua máquina ou do seu navegador, você será
                informado sobre as nossas políticas de privacidade e de uso do
                site, bem como sobre a utilização de cookies e a coleta do seu
                consentimento, podendo a qualquer momento acessar os links de
                tais regramentos que estarão dispostos em área específica do
                site.
            </p>
            <p className="mb-4">
                Você poderá configurar suas definições de cookies
                individualmente, a qualquer momento, desativando ou ativando as
                categorias individuais de cookies.
            </p>
            <p className="mb-4">
                Caso o seu aparelho de acesso seja compartilhado, e já aceito os
                termos de cookies, políticas de uso e de privacidade da nossa
                página, certifique-se, caso não concorda com as mesmas, de
                realizar a exclusão dos cookies do navegador.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
                GERENCIAMENTO DE COOKIES
            </h2>
            <p className="mb-4">
                Você poderá configurar seu navegador de Internet para impedir o
                armazenamento de cookies e/ou ser sempre questionado se concorda
                com a ativação de cookies. Podendo encontrar informações
                detalhadas na função “Ajuda” de seu navegador.
            </p>
            <p className="mb-4">
                Tenha em consideração que, diante da legislação vigente, a
                desativação de cookies poderá ter como consequência restrições
                de funcionamento de nosso site.
            </p>
        </div>
    );
};

export default CookiePolicy;
