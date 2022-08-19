import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks  } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";


jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Tests in <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('should show default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText("Loading...") );
        expect( screen.getByText("Breaking Bad Quotes") );

        const nextButton = screen.getByRole("button", { name: "Next Quote" });

        expect( nextButton.disabled ).toBeTruthy();
            
    });

    test('should shown a quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: "Tomas", quote: "Hola mundo" }],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();

        expect( screen.getByText( "Tomas" ) ).toBeTruthy();
        expect( screen.getByText( "Hola mundo" ) ).toBeTruthy();

        const nextButton = screen.getByRole("button", { name: "Next Quote" });
        expect( nextButton.disabled ).toBeFalsy();



    });


    test('should call increment function', () => {


        useFetch.mockReturnValue({
            data: [{ author: "Tomas", quote: "Hola mundo" }],
            isLoading: false,
            hasError: null,
        });

     

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole("button", { name: "Next Quote" });
        fireEvent.click( nextButton );        
  
        expect( mockIncrement ).toHaveBeenCalled();
       


    });

});