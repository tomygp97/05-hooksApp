import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";

import { HomePage } from "../../src/09-useContext/HomePage";

describe('Tests in <HomePage />', () => {

    const user = {
        id: 1,
        name: "Tomas",
    }

    test('should show component without user', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect( preTag.innerHTML ).toBe("null");

    });


    test('should show component WITH user', () => {

        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText( "pre" );
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        // console.log( preTag.innerHTML );

    });
        

        
});