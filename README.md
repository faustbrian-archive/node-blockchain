**You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/faustbrian).**

---

# @faustbrian/node-blockchain

[![npm version](https://badgen.net/npm/v/@faustbrian/node-blockchain)](https://npm.im/@faustbrian/node-blockchain)

## Installation

```
pnpm install @faustbrian/node-blockchain
```

## Usage

```ts
import { Blockchain, Block } from "@faustbrian/node-blockchain";

let blockchain: Blockchain = new Blockchain();

const oldBlock = subject.currentBlock();
const newBlock = new Block(oldBlock.index() + 1, oldBlock.timestamp() + 1, oldBlock.hash());

console.log(subject.currentBlock().index()) // 1

subject.chain(newBlock);

console.log(subject.currentBlock().index()) // 2
console.log(subject.verify()) // true
```

## License

This is an open-sourced software licensed under the [AGPL-3.0-or-later](LICENSE).
