import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the date input label', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});
