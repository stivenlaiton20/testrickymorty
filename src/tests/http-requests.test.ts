import axios from "axios";

describe("HTTP REQUEST", () => {
  test("Can fetch characters", async () => {
    const { data }: any = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=rick`
    );
    expect(data.results.length).toBe(20);
  });
});

export {};
