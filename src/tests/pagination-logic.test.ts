describe("HTTP REQUEST", () => {
  test("Pagination logic works", () => {
    const results = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const currentPage = 1;
    const resultsPerPage = 12;

    const indexOfLastResults = currentPage * resultsPerPage;
    const indexOfFirstResults = indexOfLastResults - resultsPerPage;
    const currentResults = results.slice(
      indexOfFirstResults,
      indexOfLastResults
    );

    expect(currentResults.length).toBe(12);
  });
});

export {};
