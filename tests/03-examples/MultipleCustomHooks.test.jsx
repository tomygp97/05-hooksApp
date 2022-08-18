import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks  } from "../../src/03-examples/MultipleCustomHooks";


describe('Tests in <MultipleCustomHooks />', () => {



    test('should show default component', () => {

        render( <MultipleCustomHooks /> );

        expect( screen.getByText("Loading...") );
        expect( screen.getByText("Breaking Bad Quotes") );

        const nextButton = screen.getByRole("button", { name: "Next Quote" });

        expect( nextButton.disabled ).toBeTruthy();
            
    });

});