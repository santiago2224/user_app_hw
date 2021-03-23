
import React, {useContext} from "react";
import { Card, } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const User = () => {
   const {firstName, lastName, emailAddress, avatar} = useContext(UserContext)

    return (
    <Card>
        <Card.Content>
        <Card.Header>{firstName, lastName}</Card.Header>
        <Card.Meta>
            Email: {emailAddress}
        </Card.Meta>
        </Card.Content>
        <Card.Content>
        <p>Username: {avatar}</p>
        </Card.Content>
    </Card>
    )
}

export default User;