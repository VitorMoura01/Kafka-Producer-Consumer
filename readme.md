# Aplicação de Producer e Consumer com Kafka e Docker

Este repositório contém uma aplicação simples de Producer e Consumer utilizando o Apache Kafka, e foi configurado para ser executado em um container Docker.

## Pré-requisitos

Certifique-se de ter instalado:

- Docker
- Docker Compose: Normalmente vem junto com a instalaçao do docker

## Configuração do Ambiente

1. **Clonar o repositório:**

    ```bash
    git clone https://github.com/VitorMoura01/Kafka-Producer-Consumer/tree/main.git
    cd Kafka-Producer-Consumer
    ```

    <br>

2. **Iniciar o Kafka e os serviços:**
    Acesse o caminho do docker-compose:

    ```bash
    cd docker
    ```

    Execute o seguinte comando para subir o ambiente:

    ```bash
    docker-compose up -d
    ```

    Isso inicializará os containers para o Apache Kafka, Producer e Consumer.

## Executando o Producer e Consumer

1. **Acessando os logs:**

    Para verificar os logs do Producer e do Consumer, utilize o seguinte comando:

    ```bash
    docker-compose logs -f consumer producer
    ```

    <br>

2. **Testando a Aplicação:**

    Você pode testar a aplicação gerando mensagens de teste com o Producer e verificando se o Consumer as consome. 
    
    <br>

    2.1 **Rodando o producer**

    Você pode interagir diretamente com o Producer para enviar mensagens.
    Em outro terminal, acesse o caminho do producer:

    ```bash
    cd Kafka-Producer-Consumer/tutorial/producer
    ```

    Execute o producer:

    ```bash
    python producer.py
    ```

    <br>

    2.2 **Rodando o consumer_1**

    Você pode interagir diretamente com o Consumer para receber mensagens.
    Em outro terminal, acesse o caminho do consumer:

    ```bash
    cd Kafka-Producer-Consumer/tutorial/consumer
    ```

    Execute o consumer:

    ```bash
    node consumer_1.js
    ```

    <br>

    2.3 **Rodando o consumer_2**


    Em outro terminal, acesse novamente o caminho do consumer:

    ```bash
    cd Kafka-Producer-Consumer/tutorial/consumer
    ```

    Execute o consumer:

    ```bash
    node consumer_2.js
    ```

<br>    

3. **Parando a Aplicação:**

    Para parar a execução da aplicação, use o comando:

    ```bash
    docker-compose down
    ```

