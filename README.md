# GreenCity Tracker

## Equipe

- **João Gabriel Pinheiro Ferreira** - Matrícula: 2326232  
- **Thais dos Santos Ventura** - Matrícula: 2323725  
- **Vitor Nascimento dos Santos Costa da Silva** - Matrícula: 2326330  
- **Daniel Viana Mota** - Matrícula: 2222836  

---

## Projeto: GreenCity Tracker

**Descrição do Projeto**  
O **GreenCity Tracker** é uma aplicação inovadora projetada para o monitoramento e a gestão sustentável de consumo de energia e resíduos em áreas urbanas. Este projeto tem como objetivo principal oferecer uma solução integrada para fomentar práticas mais sustentáveis, otimizando a eficiência operacional das cidades.

Com um frontend moderno desenvolvido em **React** (Next.js) e um backend robusto estruturado em **NestJS** e microsserviços, o GreenCity Tracker se destaca pela eficiência, escalabilidade e segurança no gerenciamento de dados coletados.

### Funcionalidades principais:
- Monitoramento em tempo real do consumo de energia e geração de resíduos.
- Relatórios detalhados para apoiar a tomada de decisões sustentáveis.
- Integração segura entre os módulos de frontend e backend.
- Arquitetura baseada em microsserviços para maior flexibilidade e escalabilidade.

---

## Estrutura do Projeto

### **Pasta `fe`**  
Contém o código do **frontend**, desenvolvido utilizando **Next.js**.  
Principais tecnologias:
- **Next.js** para otimização de desempenho e renderização do lado do servidor (SSR).  

### **Pasta `backend`**  
Contém o código do **backend**, implementado com **NestJS**.  
Principais tecnologias:
- **NestJS** para criação de uma API modular e escalável.
- Arquitetura baseada em **microsserviços**, permitindo fácil manutenção e expansão.

---

## Como Rodar o GreenCity Tracker

### Pré-requisitos
- **Node.js**: Versão **18.x**  
- **Yarn**: Gerenciador de pacotes  
- **Docker**: Para executar os serviços do backend  

---

### 1. Clonar o Repositório
Clone o repositório para a sua máquina local:
```bash
git clone https://github.com/jotagabrielp/greencity-tracker
cd greencity-tracker
```

---

### Frontend

1. Navegue para o diretório do frontend:
   ```bash
   cd fe
   ```

2. Instale as dependências:
   ```bash
   yarn
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

4. Acesse o frontend em: [http://localhost:3333](http://localhost:3333)  

---

### Backend

1. Navegue para o diretório do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   yarn
   ```

3. Inicie os serviços com Docker:
   ```bash
   docker-compose up --build
   ```

4. Acesse o backend em: [http://localhost:3000](http://localhost:3000)  

---

## Licença

Este projeto é distribuído sob a licença **MIT**.