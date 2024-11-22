import { initializeTimes, updateTimes } from "./BookingLogic";
import { fetchAPI } from "../utils/api";

// Mock the fetchAPI function
jest.mock("../utils/api", () => ({
  fetchAPI: jest.fn(),
}));

describe("Booking Logic Tests", () => {
  beforeEach(() => {
    // Clear any previous mock data or calls
    jest.clearAllMocks();
  });

  test("initializeTimes should return available times from fetchAPI", () => {
    // Mock fetchAPI to return a specific set of available times
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockAvailableTimes);

    // Call initializeTimes
    const result = initializeTimes();

    // Check that fetchAPI was called exactly once
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    // Verify the result matches the mocked available times
    expect(result).toEqual(mockAvailableTimes);
  });

  test("updateTimes should call fetchAPI with the provided date and return available times", () => {
    // Mock fetchAPI to return a specific set of available times
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockAvailableTimes);

    // Define a sample date
    const sampleDate = new Date("2024-11-22");

    // Call updateTimes with the sample date
    const result = updateTimes(sampleDate);

    // Ensure fetchAPI was called with the correct date
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(sampleDate);
    // Verify the result matches the mocked available times
    expect(result).toEqual(mockAvailableTimes);
  });
});
