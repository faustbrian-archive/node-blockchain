import "jest-extended";

import { Block } from "./block";
import { Blockchain } from "./blockchain";

it("should push a new block and verify the blockchain", () => {
  const subject = new Blockchain("01.01.2022");

  const oldBlock = subject.currentBlock()!;
  const newBlock = new Block(
    oldBlock.index() + 1,
    oldBlock.timestamp() + 1,
    oldBlock.hash(),
  );

  expect(subject.currentBlock()).toStrictEqual(oldBlock);

  subject.chain(newBlock);

  expect(subject.currentBlock()).toStrictEqual(newBlock);
  expect(subject.verify()).toBeTrue();
});
