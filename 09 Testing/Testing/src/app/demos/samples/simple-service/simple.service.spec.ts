import { SimpleMessageService } from "./simple.service";

describe("Testing a simple Service: SimpleMessageService", () => {
  let service: SimpleMessageService;

  beforeEach(() => {});

  it("should have no messages to start", () => {
    service = new SimpleMessageService();

    expect(service.messages.length).toBe(0);
  });

  it("should add a message when add is called", () => {
    service = new SimpleMessageService();
    service.add("message1");

    expect(service.messages.length).toBe(1);
  });

  it("should remove all messages when clear is called", () => {
    service = new SimpleMessageService();
    service.add("message1");
    service.clear();

    expect(service.messages.length).toBe(0);
  });

  it("should delete the correct item", () => {
    service = new SimpleMessageService();
    service.messages = [
      "Hello World",
      "Servas die Buam",
      "Griaß eich die Madln"
    ];
    service.delete("Hello World");

    expect(service.messages.length).toBe(2);
    expect(service.messages).toContain(
      "Servas die Buam",
      "Griaß eich die Madln"
    );
  });
});
