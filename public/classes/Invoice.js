// classes
export class Invoice {
    constructor(client, details, amount, date) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.date = date;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details} at ${this.date}`;
    }
}
