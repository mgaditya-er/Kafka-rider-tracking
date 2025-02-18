import kafka from './client.js'
const group = process.argv[2];
async function init() {
    const consumer  =  kafka.consumer({groupId: group});
    await consumer.connect();
    console.log('Consumer connected successfully');
    await consumer.subscribe({ topics: ['rider-statuss'] ,fromBeginning: true});

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) =>{
            console.log(`group : ${group},
                        Topic : [${topic}] ,
                        Partition : ${partition},
                        Message : 
                        `,message.value.toString());
            
            
        }
    });

    // await consumer.disconnect();
}
init();