import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["172.28.80.1:9092"],
});

export default kafka;
