import * as amqp from "amqplib";
import { RABBIT_URL } from "../config/index";

// export async function rabbitConnect() {
//   const conn = await amqp.connect(RABBIT_URL);

//   process.on("beforeExit", () => {
//     console.log("closing rabbit connection");
//     conn.close();
//   });

//   return conn;
// }

type BufferInput = NonNullable<Parameters<typeof Buffer.from>[0]>;

export class Producer {
  private conn: amqp.Connection;
  private channel: amqp.Channel;

  private async createChannel() {
    this.conn = await amqp.connect(RABBIT_URL);
    this.channel = await this.conn.createChannel();
  }

  closeConnection() {
    this.conn.close();
  }

  async publishMessage<T extends BufferInput>(queueName: string, message: T) {
    if (!this.channel) {
      await this.createChannel();
    }

    this.channel.sendToQueue(queueName, Buffer.from(message));
  }
}
