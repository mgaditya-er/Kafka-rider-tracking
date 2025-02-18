import kafka from './client.js'

async function init() {
    const consumer  =  kafka.consumer({groupId: "user-1"});
    await consumer.connect();
    console.log('Consumer connected successfully');
    await consumer.subscribe({ topics: ['rider-updates'] ,fromBeginning: true});

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) =>{
            console.log(`Topic : [${topic}] ,
                        Partition : ${partition},
                        Message : 
                        `,message.value.toString());
            
            
        }
    });

    // await consumer.disconnect();
}
init();