import kafka from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");

  try {
    await admin.connect();
    console.log("Admin connection Success");

    console.log("Creating topics...");
    const result = await admin.createTopics({
      topics: [
        {
          topic: "rider-statuss",
          numPartitions: 2, // Simplify configuration
        },
      ],
    });

    if (result) {
      console.log("Topic created successfully");
    } else {
      console.error("Topic creation failed or topic already exists");
    }

    const topics = await admin.listTopics();
    console.log("Available topics:", topics);
  } catch (error) {
    console.error("Error creating topic:", error);
  } finally {
    await admin.disconnect();
    console.log("Admin disconnected");
  }
}

init();
