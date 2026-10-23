# HotelPet

Projeto final das disciplinas de Programação Web I e II — um sistema de gerenciamento de estadia de pets em hotéis, desenvolvido com HTML, CSS e JavaScript puros, sem bibliotecas nem frameworks.

Este repositório implementa a **visão do Gerente**, uma das três visões previstas no protótipo original (Cliente, Funcionário e Gerente).

## Sobre o projeto

O Hotel Pet é um sistema onde clientes reservam estadias para seus animais de estimação e acompanham o dia a dia da hospedagem. Como o projeto não tem backend, todo o conteúdo é estático — os dados exibidos (reservas, pets, usuários) são fictícios.

O protótipo de referência (wireframes) foi feito no Figma, a partir do Lo-fi Wireframe Kit.

## O que o Gerente pode fazer

A visão do Gerente reúne todas as permissões de Cliente e Funcionário, além de:

- Editar reservas mesmo com status Finalizado
- Alterar a função de um usuário (Cliente / Funcionário / Gerente)
- Acessar o menu Configurações, para definir o valor da diária e o número de vagas disponíveis

## Etapas da Programação Web II

| Etapa | Entrega | Situação |
|---|---|---|
| Semana 1 — 21/10 | Navegação | Concluída |
| Semana 2 — 28/10 | Buscas | Concluída |
| Semana 3 — 04/11 | Tabelas | A fazer |

### Semana 1 — Navegação

- Login e criar conta: validam os campos e levam para a tela de reservas
- Botão **Sair** no menu: volta para a tela de login
- Telas de cadastro e edição de reservas, pets e usuários: ao salvar, voltam para a listagem correspondente

Como não há backend, qualquer e-mail e senha preenchidos permitem entrar.

### Semana 2 — Buscas

- **Reservas:** pesquisa por id, data de chegada, data de partida, proprietário, total mínimo e máximo, status e pet
- **Pets:** pesquisa por id, raça, nome e tamanho
- **Usuários:** pesquisa por id, período de criação, email, nome, status e função
- Campos em branco são ignorados; ao preencher vários, a linha precisa atender a todos
- O botão **Limpar** apaga os campos e mostra todas as linhas novamente
- As tabelas usam dados fictícios, e a busca apenas mostra ou esconde as linhas

## Estrutura do projeto

```
HotelPet/
├── index.html               # Login
├── criar-conta.html         # Criação de conta
├── pets.html                # Listagem de pets
├── pet-novo.html            # Cadastro de pet
├── pet-editar.html          # Edição de pet
├── pet-visualizar.html      # Visualização de pet + histórico de reservas
├── reservas.html            # Listagem de reservas
├── reserva-nova.html        # Nova reserva
├── reserva-editar.html      # Edição de reserva
├── reserva-visualizar.html  # Visualização de reserva
├── usuarios.html            # Listagem de usuários
├── usuario-novo.html        # Cadastro de usuário
├── usuario-editar.html      # Edição de usuário
├── usuario-visualizar.html  # Visualização de usuário
├── perfil.html              # Edição do próprio perfil
├── configuracoes.html       # Configurações (diária e vagas)
├── css/
│   └── style.css            # Estilos do site
├── js/
│   ├── login.js             # Navegação do login
│   ├── criar-conta.js       # Navegação da criação de conta
│   ├── sair.js              # Botão Sair
│   ├── salvar-reserva.js    # Salvar de reservas volta para a listagem
│   ├── salvar-pet.js        # Salvar de pets volta para a listagem
│   ├── salvar-usuario.js    # Salvar de usuários volta para a listagem
│   ├── busca-reservas.js    # Pesquisa de reservas
│   ├── busca-pets.js        # Pesquisa de pets
│   └── busca-usuarios.js    # Pesquisa de usuários
└── imagens/                 # Logo, fotos e ícones
```

## Como visualizar

Basta abrir o arquivo `index.html` no navegador — não é necessário servidor nem instalação.

```
git clone https://github.com/afonsooe/HotelPet.git
```

Abra a pasta em um editor de código (ex.: IntelliJ IDEA) e abra o `index.html`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (sem bibliotecas ou frameworks, conforme exigido pela disciplina)

Autor: Erivelton Afonso — Programação Web I e II
