import { Block } from "./block";

export class Blockchain {
  readonly #blockchain: Block[];

  public constructor(date: string) {
    this.#blockchain = [
      new Block(
        1,
        +Date.parse(date),
        "0000000000000000000000000000000000000000000000000000000000000000",
      ),
    ];
  }

  public currentBlock(): Block | undefined {
    return this.#blockchain[this.#blockchain.length - 1];
  }

  public chain(block: Block): void {
    this.#blockchain.push(block);
  }

  public verify(): boolean {
    for (let index = 1; index < this.#blockchain.length; index++) {
      const currentBlock: Block | undefined = this.#blockchain[index];

      if (!currentBlock) {
        return false;
      }

      const parentBlock: Block | undefined = this.#blockchain[index - 1];

      if (!parentBlock) {
        return false;
      }

      if (currentBlock.parentHash() !== parentBlock.hash()) {
        return false;
      }

      if (currentBlock.timestamp() <= parentBlock.timestamp()) {
        return false;
      }
    }

    return true;
  }
}
