import { HasFormatter } from "../interfaces/HasFormatter";

// classes
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
    public date: string
  ) {}

  format() {
    return `${this.client} owes €${this.amount} for ${this.details} at ${this.date}`;
  }
}
