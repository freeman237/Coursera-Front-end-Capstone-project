import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm, { isFormValid } from "./BookingForm";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest"; // Use `vi` if using Vitest for mocking

// Mock the submitAPI function
vi.mock("../utils/api", () => ({
  submitAPI: vi.fn(() => true), // Simulate a successful API call
}));

describe("BookingForm Component", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = vi.fn();

  test("renders the form correctly", () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} updateTimes={mockUpdateTimes} />
      </MemoryRouter>
    );

    // Check if all fields are rendered
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /make reservation/i })).toBeInTheDocument();
  });
});
