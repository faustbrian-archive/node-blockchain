import { hash } from "@faustbrian/node-sha256";

export class Block {
  readonly #index: number;
  readonly #timestamp: number;
  readonly #parentHash: string;
  readonly #hash: string;

  public constructor(index: number, timestamp: number, parentHash: string) {
    this.#index = index;
    this.#timestamp = timestamp;
    this.#parentHash = parentHash;
    this.#hash = hash(index + parentHash + timestamp).toString("hex");
  }

  public index(): number {
    return this.#index;
  }

  public timestamp(): number {
    return this.#timestamp;
  }

  public parentHash(): string {
    return this.#parentHash;
  }

  public hash(): string {
    return this.#hash;
  }
}
