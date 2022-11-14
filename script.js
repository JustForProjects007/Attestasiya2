class Message {
    constructor(name, time, text) {
        this.name = name,
            this.time = time,
            this.text = text
    }

}

class Messenger extends Message {
    constructor(name, time, text, messages) {
        super(name, time, text);
        this.messages = messages
    }

    sendMessage(name, text) {
        this.name = name;
        this.text = text;
    }

    toString() {

        function gettime() {
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }

        this.time=gettime();

        this.messages = `${this.time} ${this.name} -> ${this.text} `
        return this.messages
    }

}

let sender = new Messenger();
sender.sendMessage('mahammad', 'Test message')
console.log(sender.toString())