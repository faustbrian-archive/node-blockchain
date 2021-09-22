import "jest-extended";

import { Block } from "./block";

it("should create a new block with a hash", () => {
  const subject = new Block(
    1,
    +Date.parse("01.01.2022"),
    "0000000000000000000000000000000000000000000000000000000000000000",
  );

  expect(subject.index()).toStrictEqual(1);
  expect(subject.timestamp()).toStrictEqual(1_640_988_000_000);
  expect(subject.parentHash()).toStrictEqual(
    "0000000000000000000000000000000000000000000000000000000000000000",
  );
  expect(subject.hash()).toStrictEqual(
    "aac9ba0ac36ebd622b5e97f7a578725962a7ef4fd2875936995a51e4e141d169",
  );
});
