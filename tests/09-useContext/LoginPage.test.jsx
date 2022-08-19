import { render, screen, fireEvent} from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Test in <LoginPage />', () => {


    const setUserMock = jest.fn();
    const user = { 
         id: 123,
         name: "Tomi",
         email: "tomi@email.com" 
    }
    beforeEach( () => jest.clearAllMocks() );

    test('should show component without user', () => {

        
        
        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage  setUser={ setUserMock }/> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect( preTag.innerHTML ).toBe("null");

    });


    test('button should call setUser on click', () => {

        

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage /> 
            </UserContext.Provider>
            );

            const setButton = screen.getByRole("button");
            fireEvent.click( setButton );
            expect( setUserMock ).toHaveBeenCalledWith(user);
            
    });

});
