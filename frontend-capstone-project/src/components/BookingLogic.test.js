import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the default available times", () => {
  render(<BookingForm />);
  const timeDropdown = screen.getByLabelText("Choose time");
  expect(timeDropdown).toBeInTheDocument();

  // Check default times in the dropdown
  const timeOptions = screen.getAllByRole("option");
  expect(timeOptions).toHaveLength(7); // 6 times + 1 default "Select a time" option
  expect(timeOptions[1]).toHaveTextContent("17:00");
  expect(timeOptions[6]).toHaveTextContent("22:00");
});

test("Updates available times when a date is selected", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose date");
  const timeDropdown = screen.getByLabelText("Choose time");

  // Simulate changing the date
  fireEvent.change(dateInput, { target: { value: "2023-12-25" } });

  // Verify that available times remain the same (static for now)
  const timeOptions = screen.getAllByRole("option");
  expect(timeOptions).toHaveLength(7);
  expect(timeOptions[1]).toHaveTextContent("17:00");
  expect(timeOptions[6]).toHaveTextContent("22:00");
});
