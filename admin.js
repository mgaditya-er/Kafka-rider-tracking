import kafka from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");

  await admin.connect(); // Add await to ensure proper connection
  console.log("Admin connection Success");

  console.log("Creating topics...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created successfully");

  await admin.disconnect(); // Disconnect the admin client to avoid hanging
}

init();
