// classes
export class Payment {
    constructor(recipient, details, amount, date) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.date = date;
    }
    format() {
        return `${this.recipient} is owed €${this.amount} for ${this.details} at ${this.date}`;
    }
}
