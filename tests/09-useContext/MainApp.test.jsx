import { MainApp } from "../../src/09-useContext/MainApp";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('Test in <MainApp />', () => {

    test('should show HomePage', () => {

        render( 
            <MemoryRouter  initialEntries={["/login"]}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText("LoginPage") ).toBeTruthy();
        // screen.debug();
           
    });


});