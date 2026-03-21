# Atividade 1 — App Web com Express

Aplicação web desenvolvida com **Node.js** e **Express** como primeira atividade prática da disciplina de Desenvolvimento Web do curso de **Desenvolvimento de Software Multiplataforma (DSM)** da FATEC.

---

## Descrição

O projeto implementa um servidor HTTP que serve páginas HTML estáticas, demonstrando o uso de rotas, arquivos estáticos e tratamento de erros 404 com o framework Express.

---

## Tecnologias

| Tecnologia | Versão |
|---|---|
| Node.js | ≥ 18 |
| Express | ^5.2.1 |
| dotenv | ^17.3.1 |

---

## Estrutura do projeto

```
dev-web1-atv1/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css
│   │   └── img/
│   │       ├── logo_dsm_transparente.png
│   │       ├── logo_fatec_transparente.png
│   │       └── logo_cps_transparente.png
│   └── pages/
│       ├── index.html      # Página inicial
│       ├── login.html      # Formulário de login
│       ├── cadastro.html   # Formulário de cadastro
│       └── 404.html        # Página de erro 404
├── server.js               # Ponto de entrada do servidor
├── package.json
└── .env                    # Variáveis de ambiente (não versionado)
```

---

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Página inicial com informações sobre o curso DSM |
| GET | `/login` | Formulário de login |
| GET | `/cadastro` | Formulário de cadastro |
| — | qualquer outra | Retorna a página 404 com status `404` |

Os arquivos estáticos (CSS, imagens) são servidos sob o prefixo `/assets`.

---

## Configuração

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3000
```

> A variável `PORT` define em qual porta o servidor será iniciado.

---

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina.

### Instalação das dependências

```bash
npm install
```

### Modo produção

```bash
npm start
```

### Modo desenvolvimento (com recarga automática)

```bash
npm run dev
```

> O modo `dev` utiliza a flag `--watch` nativa do Node.js, recarregando o servidor automaticamente ao detectar alterações nos arquivos.

Após iniciar, acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

---

## Páginas

- **Home (`/`)** — Apresenta os logos do DSM, FATEC e CPS, uma descrição do curso e botões de acesso às páginas de login e cadastro.
- **Login (`/login`)** — Formulário com campos de e-mail e senha.
- **Cadastro (`/cadastro`)** — Formulário com campos de e-mail, senha e confirmação de senha.
- **404** — Exibida automaticamente para qualquer rota não mapeada.

---

## Licença

Projeto acadêmico — FATEC / DSM — 1º Semestre, 2026.
