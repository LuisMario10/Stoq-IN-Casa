
---

# 📦 Projeto **Stoq-IN-Casa**

## ✅ Objetivo

O projeto **Stoq-IN-Casa** tem como principal finalidade **simplificar e automatizar a gestão de produtos armazenados em residências**. A proposta é oferecer uma solução prática para controle de estoque doméstico e auxílio em compras inteligentes.

---

## 🗓️ Data de Início

**15 de maio de 2025**

---

## 🧩 Entidades do Sistema

### 🛒 Produto

| Atributo         | Tipo       | Descrição                                       |
| ---------------- | ---------- | ----------------------------------------------- |
| Nome do Produto  | Texto      | Nome do item armazenado                         |
| Preço Estimado   | Float      | Valor aproximado do produto                     |
| Quantidade       | Inteiro    | Quantidade disponível                           |
| Data de Validade | Texto/Data | Validade do produto (formato a definir)         |
| Data de Cadastro | Texto/Data | Data em que o produto foi registrado no sistema |

---

### 👤 Usuário

| Atributo                              | Tipo          | Descrição                                              |
| ------------------------------------- | ------------- | ------------------------------------------------------ |
| Nome                                  | Texto         | Nome completo do usuário                               |
| Email                                 | Texto (único) | E-mail usado para login e comunicação                  |
| Senha                                 | Texto         | Senha criptografada para acesso                        |
| É Administrador (éADM)                | Booleano      | Define se o usuário possui permissões administrativas  |
| Produtos do Cotidiano                 | Lista\[Texto] | Produtos que o usuário costuma utilizar com frequência |
| Data de Registro                      | Texto/Data    | Data de criação do perfil                              |
| Data da Última Alteração de Registros | Texto/Data    | Última vez que o usuário atualizou seu estoque         |

---

## 💡 Propostas e Funcionalidades

* 📋 **Gerenciamento doméstico eficiente**: Organização do estoque pessoal de forma simples e acessível.
* 🛍️ **Lista de compras inteligente**: Geração automática de listas com base em produtos em falta e sugestão de melhores preços por item.
* 🔔 **Alertas e notificações**: Avisos sobre produtos próximos do vencimento ou com estoque baixo (proposta futura).
* 📊 **Relatórios personalizados**: Histórico de consumo e gastos mensais (expansão futura).

---

## 🧰 Tecnologias Utilizadas

| Camada              | Tecnologias                                                   |
| ------------------- | ------------------------------------------------------------- |
| Front-End           | HTML, CSS, JavaScript                                         |
| Back-End            | Node.js com Express                                           |
| Banco de Dados      | MySQL                                                         |
| Futuras Integrações | APIs de mercado e preços (ex: Mercado Livre, Google Shopping) |

---
