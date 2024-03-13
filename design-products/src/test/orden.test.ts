import { beforeAll, beforeEach, describe, test } from "vitest";

describe("probando each", () => {
  beforeAll(() => {
    console.log("All 1 Solo se ejecuta una vez antes de todos los test");
  });

  beforeEach(() => {
    console.log("Antes del que se ejecute el Test");
  });

  test("test 1", () => {
    console.log("test 1");
  });

  test("test 2", () => {
    console.log("test 2");
  });
});
