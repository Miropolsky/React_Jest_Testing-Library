import App from './App';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { act } from 'react';

describe('App component', () => {
  it('App renders', () => {
    render(<App />);
    expect(screen.getByText('Find course:')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  })

  it('typing in Searchbox works', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    act(() => {
      userEvent.type(screen.getByRole('textbox'), "React");
    });
    // userEvent.type(screen.getByRole('textbox'), "React");

    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  })

  it('search filter is working', () => {
    render(<App />)

    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

    // userEvent.type(screen.getByRole('textbox'), "script");
    act(() => {
      userEvent.type(screen.getByRole('textbox'), "script");
    });
    expect(screen.queryByText(/Vue/)).toBeNull()
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument()

  })
})