<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aleluia Agência</title>
    <link rel="shortcut icon"  href="imagens/Icones, marcas e logotipos/ìcone-do-site.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.menu.css">
    <link rel="stylesheet" href="style.slide.css">
    <link rel="stylesheet" href="style.ancora.css">
    <link rel="stylesheet" href="style.css">
</head>
<body onresize="iconemodifica()">   
    <a href="#menu" class="ancora"><img src="imagens/Icones, marcas e logotipos/ìcone-do-site.png" alt=""></a>

    <header id="menu"> <!--Cabeça do site-->

            <a href="index.html" class="link-marca"><img class="marca_aleluia_agencia" src="imagens/Icones, marcas e logotipos/Logotipo.png" alt=""></a>   

            <nav id="nav"> <!--Navegação-->

                <div class="mobile-menu" onclick="active()">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>

                <ul class="nav-list">
                    <li><a href="#Quem_Somos" onclick="disable()">Quem Somos</a></li>
                    <li class="barra">|</li>
                    <li><a href="#Serviços" onclick="disable()">Serviços</a></li>
                    <li class="barra">|</li>
                    <li><a href="perguntasfrequentes.html" target="_self" onclick="disable()">Perguntas Frequentes</a></li>
                    <li class="barra">|</li> 
                    <li><a href="cursos.html" target="_self" onclick="disable()">Cursos</a></li>
                    <li class="barra">|</li>
                    <li><a href="#contate_nos" onclick="disable()">Contate-nos</a></li>
                </ul>      
            </nav>
    </header>
    
    <main> <!--Corpo do site-->
            <section id="Quem_Somos" class="Quem_Somos"> <!--Texto sobre nós-->
                <p class="quem-somos" style="font-family: var(--fontePadrão);">
                   <span class="quem-somos-ola">Olá!</span><br>
                    Novo por aqui? Então deixe-me <br> 
                    falar quem somos! A Aleluia Agência é uma <br> 
                    empresa de marketing cujo objetivo é fazer <br> 
                    com que os seus clientes alcancem resultados <br> 
                    significativos através dos seus serviços. 
                </p>
            </section>

            <section id="Quem_Somos2" class="Quem_Somos2">
                <p class="Quem_Somos2">A agência acredita que <br> 
                grandes resultados só são <br> 
                alcançados através de <br>
                serviços de qualidade que se <br>
                conectem com o seu público, e <br>
                é para isso que a agência <br>
                trabalha e busca sempre <br> 
                melhorar os serviços para <br>
                proporcionar aos clientes  <br>
                resultados de excelência.</p>

                <div class="video"><iframe src="https://www.youtube.com/embed/8LQTp_Nek9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </section>

        <section id="Nossa_Equipe" class="Quem_Somos3">
            <h1>Conheça a nossa Equipe!</h1>

            <span class="Wanderson">
                <img src="imagens/Fotos dos funcionarios/Wanderson.png" alt="Wanderson">
                <p> Wanderson Souza, CEO da <br> 
                    Agência, Designer Gráfico, <br> 
                    Estrategista digital e <br> 
                    responsável por desenvolver <br> 
                    Identidades visuais.
                </p>
            </span>

            <span class="Nadson">
                <p>Nadson Brito, Designer <br> 
                   Gráfico, responsável por <br> 
                   criar flyers funionais para <br> 
                   campanhas digitais e <br> 
                   para redes sociais.</p>
                <img src="imagens/Fotos dos funcionarios/Nadson.png" alt="Nadson">
            </span>

            <span class="Lucius">
                <img src="imagens/Fotos dos funcionarios/Lucius.png" alt="Lucius">
                <p>Lucius Couto, Programador, <br> 
                    webmaster, responsável pela  <br> 
                    criação de sites funcionais e <br>
                    responsivos.
                </p>
            </span>

            <span class="Railana">
                <p>Railana Brito, Social <br> 
                   media e estrategista <br> 
                   digital, responsável pelo <br> 
                   gerenciamento de redes <br> 
                   sociais, marketing de <br> 
                   conteúdo e pelo <br> 
                   crescimento das mesmas.
                </p>
                <img src="imagens/Fotos dos funcionarios/Railana.png" alt="Railana">
            </span>
        </section>

        <section id="Serviços">
            <h1>Conheça os nossos<br>
                principais serviços
            </h1>

            <div style="display: flex; margin-bottom: 2vw; margin-top: 5vw; margin-left: 18.5vw;;">
                <img style="width: 10vw;" src="imagens/Icones, marcas e logotipos/Grupo 16.png" alt="">
                <p style="margin-left: 2vw; margin-top: 2.5vw;">Gerenciamento de redes<br> 
                   sociais sem enrolação;</p>
            </div>

            <div style="display: flex; margin-bottom: 2vw; margin-top: 2vw; margin-left: 18.5vw;;">
                <img style="width: 10vw;" src="imagens/Icones, marcas e logotipos/Grupo 17.png" alt="">
                <p style="margin-left: 2vw; margin-top: 2.5vw;">Identidades visuais<br> 
                   funcionais;</p>
            </div>

            <div style="display: flex; margin-bottom: 2vw; margin-top: 2vw; margin-left: 18.5vw;;">
                <img style="width: 10vw;" src="imagens/Icones, marcas e logotipos/Grupo 18.png" alt="">
                <p style="margin-left: 2vw; margin-top: 2.5vw;">Flyers que despertam<br>
                interesse em teu público</p>
            </div>

            <div style="display: flex; margin-bottom: 2vw; margin-top: 2vw; margin-left: 18.5vw;;">
                <img style="width: 10vw;" src="imagens/Icones, marcas e logotipos/Grupo 19.svg" alt="">
                <p style="margin-left: 2vw; margin-top: 2vw;">Criação de sites<br>
                   responsivos e verdadeiros<br>
                   conversores de vendas!</p>
            </div>

            <h1 style="margin-top: 10vw;">Portfólio</h1>
            <h2>Design para redes sociais</h2>

            <div class="slide-container">

                <div class="btn">
                    <input type="button" value="" id="prev-btn" onclick="btnPrev()">
                </div>
                <div class="btn">
                    <input type="button" value="" id="prox-btn" onclick="btnProx()">
                </div>

                <label id="prev" for="prev-btn">&lt;</label>
                <label id="prox" for="prox-btn">&gt;</label>

                <div class="slide">
                    <div class="images s1" style="margin-left: 25vw;">
                        <img src="imagens/Pranchetas/Prancheta-1.png" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-2.png" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-3.png" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-4.jpg" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-5.png" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-6.png" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-7.png" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-8.png" alt="">
                    </div>
                    <div class="images">
                        <img src="imagens/Pranchetas/Prancheta-9.png" alt="">
                    </div>
                </div>

                <div class="bubble">
                    <div class="bubble1 bub" onclick="bub1()">
                    </div>
                    <div class="bubble2 bub" onclick="bub2()">
                    </div>
                    <div class="bubble3 bub" onclick="bub3()">
                    </div>
                    <div class="bubble4 bub" onclick="bub4()">
                    </div>
                    <div class="bubble5 bub" onclick="bub5()">
                    </div>
                    <div class="bubble6 bub" onclick="bub6()">
                    </div>
                    <div class="bubble7 bub" onclick="bub7()">
                    </div>
                    <div class="bubble8 bub" onclick="bub8()">
                    </div>
                    <div class="bubble9 bub" onclick="bub9()">
                    </div>
                </div>

            </div>
              
            <h1 style="margin-top: 10vw;">Identidades visuais</h1>
        
            <div class="com">
                <img style="width: 28vw;" src="imagens/Imagens/Simbolo-(Azul-com-fundo-laranja).png" alt="">
                <p>A Filadélfia é uma oficina mecânica voltada <br> 
                    para todos os públicos, o tom de voz de sua <br> 
                    marca tem uma característica peculiar, ser <br> 
                    amigável e ao mesmo tempo transmitir <br> 
                    autoridade e conhecimento no assunto.</p>
            </div>
            <h6 style="margin-top: 1vw;">Símbolo</h6>

            <div class="com">
                <img style="width: 28vw;" src="imagens/Imagens/MARCA.png" alt="">
                <p style="margin-top: 10vw;">O desafio que tivemos foi transmitir através <br> 
                    dessa Identidade Visual agradar a todos os <br> 
                    públicos, transmitindo um sentimento amigável <br> 
                    e de autoridade, sentimentos que o proprietário <br> 
                    da oficina quis transmitir.</p>
            </div>
            <h6>Marca</h6>

            <div class="com">
                <img style="width: 40vw;" src="imagens/Imagens/PLACA.png" alt="">
                <img style="margin-left: 2vw; width: 30vw;" src="imagens/Imagens/CAMISA-POLO-(FRENTE).png" alt="">
            </div>
            <div style="display: flex;">
                <h6 style="margin-left: 18.5vw; ">Fachada</h6>
                <h6 style="margin-left: 38vw;">Fardamento</h6>
            </div>
            <div style="margin-top: 2vw;" class="com">
                <img style="width: 40vw;" src="imagens/Imagens/Mockup-da-logo-de-Fagner.png" alt="">
                <img style="margin-left: 2vw; width: 30vw;" src="imagens/Imagens/CARRO.png" alt="">
            </div>
            <div style="display: flex;">
                <h6 style="margin-left: 18.5vw; ">Marca em alto relevo</h6>
                <h6 style="margin-left: 35vw;">Plotagem para carro</h6>
            </div>
        </section>

        <section id="contate_nos" style="text-align: center; margin-top: 15vw; margin-bottom: 5vw;">
               <h4 style="font-size:  2vw;">
                   Gostou? Entre em contato conosco e solicite já <br>
                   uma proposta! Garantimos um ótimo e <br>
                   exclusivo atendimento!
               </h4>
               <div style="display: flex; margin-top: 1.5vw; justify-content: center;">
                   <a style="margin-left: 1vw;" href="https://aleluiaagencia@hotmail.com" target="_blank"><img style="width: 2vw;" src="imagens/Icones, marcas e logotipos/Icon material-email.svg" alt=""></a>
                   <a style="margin-left: 1vw;" href="https://wa.me/5573981481665" target="_blank"><img style="width: 2vw;" src="imagens/Icones, marcas e logotipos/Icon awesome-whatsapp.svg" alt=""></a>
                   <a style="margin-left: 1vw;" href="https://www.instagram.com/aleluiaagencia/" target="_blank"><img style="width: 2vw;" src="imagens/Icones, marcas e logotipos/Icon awesome-instagram.svg" alt=""></a>
                   <a  style="margin-left: 1vw;" href="https://www.facebook.com/1l3lu/?ref=pages_you_manage" target="_blank"><img style="width: 2vw;" src="imagens/Icones, marcas e logotipos/Icon awesome-facebook.svg" alt=""></a>
               </div>
        </section>
    </main>

    <script src="scroll.js"></script>
    <script src="menuHeader.js"></script>
    <script src="slide.js"></script>
    <script src="JavaScript.js"></script>
</body>
</html>