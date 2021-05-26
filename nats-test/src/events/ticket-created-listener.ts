import { Listener } from "./base-listeners";
import { Message } from "node-nats-streaming";
import { TicketCreatedEvent } from "./ticket-created-events";
import { Subjects } from "./subjects";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queGroupName = "payments-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event Data!", data);

    msg.ack();
  }
}
