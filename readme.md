# APP

FindAFriend Challange 03

## RFs (Requisítos Funcionais)

- [x] Deve ser possível cadastrar um pet;
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade;
- [x] Deve ser possível filtrar pets por suas características;
- [x] Deve ser possível visualizar detalhes de um pet para adoção;
- [x] Deve ser possível cadastrar como uma ORG;
- [x] Deve ser possível fazer login como uma ORG;

## RNs (Regras de Negócio)

- [x] Para listar os pets, obrigatoriamente precisamos informar a cidade;
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp;
- [x] Um pet deve estar ligado a uma ORG;
- [x] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp;
- [x] Todos os filtros, além da cidade são opcionais;
- [x] Para uma ORG acessa a aplicação como admin, ela precisa estar logada;

## RNFs (Requisitos Não Funcionais)

- [x] A senha da ORG precisa ser criptografada;
- [x] A ORG deve ser indentificada por um JWT (Jason Web Token)
