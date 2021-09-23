import mqtt, { IClientOptions, MqttClient } from 'mqtt';
import { weatherDataSubject } from '../controllers/data.controller';

const { MQTT_PORT, MQTT_HOST } = process.env;
const url = MQTT_HOST;
const options: IClientOptions & any = {
    port: MQTT_PORT,
    qos: 2,
    queueQoSZero: true,
    clean: true,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
};
export let client: MqttClient;
export const connectToBroker = () => {
    client = mqtt.connect(url, options);

    setupListeners(client);

    return client;
}

const publishData = (c: MqttClient, data: any, topic: string): void =>  {
    c.publish(topic, typeof(data) === 'string' ? data : JSON.stringify(data));
};

const setupListeners = (c: MqttClient) => {
    c?.on('connect', (_: any) => {
        console.info(`[MQTT] connected`, _);

        c.subscribe('gci/test/ws', (error: any, granted: any) => console.log(`[sub]`, error, granted));
    });

    // Connection opened
    c?.on('reconnect', (error: any) => {
        console.warn(`[MQTT] connection reconnected`, error);
    });

    // Listen for messages
    c?.on('message', (topic: any, data: { toString: () => string; }) => {
        const payload = JSON.parse(data.toString());

        console.log(`[MQTT] message`, {topic, payload});
        weatherDataSubject.next(payload);

        if (payload) {
            publishData(c, payload, `/rt/weather-data/${payload.id}`);
        }
    });

    c?.on('error', (event: any) => {
        console.error(`[MQTT] connection error`, event);
    });
};
