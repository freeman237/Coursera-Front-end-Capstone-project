import { initializeTimes, updateTimes, fetchAPI } from "./BookingLogic";

// Mock the fetchAPI function
vi.mock("./BookingLogic", () => ({
  fetchAPI: vi.fn(() => ["17:00", "18:00", "19:00"]),
}));

describe("BookingLogic functions", () => {
  test("initializeTimes returns an array of times", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns updated times based on selected date", () => {
    const date = "2024-11-25";
    const times = updateTimes(date);
    expect(Array.isArray(times)).toBe(true);
    expect(times).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("fetchAPI is called with the correct date", () => {
    const date = new Date("2024-11-25");
    fetchAPI(date);
    expect(fetchAPI).toHaveBeenCalledWith(date);
  });
});
