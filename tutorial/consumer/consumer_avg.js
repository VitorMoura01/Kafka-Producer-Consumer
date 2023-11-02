const Kafka = require('no-kafka');

// Create an instance of the Kafka consumer

const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        var text = m.message.value.toString('utf8');
        console.log(text + " sou o consumer 1! Vamos jogar Fortnite!");
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('kafka-python-topic', data);
});