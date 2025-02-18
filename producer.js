import kafka from "./client.js";
import readline from 'readline'

// for cli application to take user input and give output
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function init(){
    const producer =kafka.producer();
    console.log('connecting producer');
    await producer.connect();
    console.log('producer connect successfully');
    
    await producer.send({
        topic : 'rider-updates',
        messages : [
            {
                partition : 0,
                key :'location-update',value : JSON.stringify({name : 'Tony stark',loc: 'South'}),
            }
        ]
    });
    await producer.disconnect();
}

init();