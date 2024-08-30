import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Form from "../Components/Form";

describe("Testing Form Component", () => {

  test("Should render the form correctly", () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/nombre:/i);
    const courseInput = screen.getByLabelText(/curso:/i);
    const submitButton = screen.getByText("Enviar");

    expect(nameInput).toBeVisible();
    expect(courseInput).toBeVisible();
    expect(submitButton).toBeVisible();
  });

  test('Should not allow numbers in the name input', () => {
    render(<Form />);
    
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: '1234' } });
    fireEvent.click(screen.getByText("Enviar"));
  
    const errorMessage = screen.getByText(/El nombre solo debe contener letras/i);
    expect(errorMessage).toBeVisible();
  });

  test("Should submit the form and trigger showCard and showMessage", () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/nombre:/i);
    const courseInput = screen.getByLabelText(/curso:/i);
    const submitButton = screen.getByText("Enviar");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(courseInput, { target: { value: "React Basics" } });
    fireEvent.click(submitButton);

    const cardComponent = screen.getByText("John Doe");
    const messageComponent = screen.getByText("React Basics");

    expect(cardComponent).toBeVisible();
    expect(messageComponent).toBeVisible();
  });
});