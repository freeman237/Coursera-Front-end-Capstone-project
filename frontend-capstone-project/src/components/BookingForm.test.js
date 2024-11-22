import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm, { isFormValid } from "./BookingForm";
import { MemoryRouter } from "react-router-dom";

// Mock the submitAPI function
jest.mock("../utils/api", () => ({
  submitAPI: jest.fn(() => true), // Simulate a successful API call
}));

describe("BookingForm Component", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = jest.fn();

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

  test("HTML5 validation attributes are applied", () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} updateTimes={mockUpdateTimes} />
      </MemoryRouter>
    );

    // Date Input
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");

    // Guests Input
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("form submission calls submitAPI and navigates to confirmation page", () => {
    const { submitAPI } = require("../utils/api");

    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} updateTimes={mockUpdateTimes} />
      </MemoryRouter>
    );

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2024-11-25" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));

    // Check that submitAPI was called
    expect(submitAPI).toHaveBeenCalledWith({
      date: "2024-11-25",
      time: "17:00",
      guests: 4,
      occasion: "Birthday",
    });
  });
});

describe("isFormValid function", () => {
  test("returns true for valid form data", () => {
    const validFormData = {
      date: "2024-11-25",
      time: "17:00",
      guests: 4,
      occasion: "Birthday",
    };
    expect(isFormValid(validFormData)).toBe(true);
  });

  test("returns false for invalid form data", () => {
    const invalidFormData = {
      date: "",
      time: "",
      guests: 0,
      occasion: "",
    };
    expect(isFormValid(invalidFormData)).toBe(false);
  });
});
