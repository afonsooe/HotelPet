# HotelPet

Projeto final da disciplina de Programação Web I — um sistema de gerenciamento de estadia de pets em hotéis, desenvolvido em HTML e CSS puros, sem uso de frameworks ou bibliotecas.

Este repositório contém a implementação da visão do Gerente, uma das três visões previstas no protótipo original (Cliente, Funcionário e Gerente).

Sobre o projeto

O Hotel Pet é um sistema onde clientes reservam estadias para seus animais de estimação e acompanham o dia a dia da hospedagem. Como o projeto não inclui backend, todo o conteúdo é estático — os dados exibidos (reservas, pets, usuários) são fictícios, usados apenas para demonstrar a estrutura e o funcionamento das telas.

O protótipo de referência (wireframes) foi desenvolvido no Figma, a partir do Lo-fi Wireframe Kit.

O que o Gerente pode fazer

A visão do Gerente reúne todas as permissões de Cliente e Funcionário, além de:

Editar reservas mesmo com status Finalizado

Alterar a função de um usuário (Cliente / Funcionário / Gerente)

Acessar o menu Configurações, para definir o valor da diária e o número de vagas disponíveis

Estrutura do projeto

hotel-pet/

├── index.html                 # Login

├── criar-conta.html           # Criação de conta

├── pets.html                  # Listagem de pets

├── pet-novo.html               # Cadastro de pet

├── pet-editar.html             # Edição de pet

├── pet-visualizar.html         # Visualização de pet + histórico de reservas

├── reservas.html               # Listagem de reservas

├── reserva-nova.html           # Nova reserva

├── reserva-editar.html         # Edição de reserva

├── reserva-visualizar.html     # Visualização de reserva

├── usuarios.html               # Listagem de usuários

├── usuario-novo.html           # Cadastro de usuário

├── usuario-editar.html         # Edição de usuário

├── usuario-visualizar.html     # Visualização de usuário

├── perfil.html                 # Edição do próprio perfil

├── configuracoes.html          # Configurações (diária e vagas)

├── css/

│   └── style.css               # Estilos do site

└── imagens/                    # Logos, fotos e ícones usados no projeto


Como visualizar o projeto


Como é um site estático, basta abrir o arquivo index.html diretamente no navegador — não é necessário nenhum servidor ou instalação.


Link do GitHub - https://github.com/afonsooe/HotelPet.git

Abra a pasta no navegador ou em um editor de código (ex: IntelliJ IDEA) e abra index.html.

Tecnologias utilizadas

HTML5

CSS3

Nenhuma biblioteca ou framework, conforme exigido pela disciplina

Autor: Erivelton Afonso — Programação Web I
