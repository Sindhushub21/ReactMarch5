import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';


export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <div>
            <h1 className="text-center">Contact Us</h1>
            <CardGroup style={{ padding: '16px 0', display: 'block', width: '50vw', margin: 'auto'}}>
                <Card>
                    <Card.Header as="h5" style={{ textAlign: 'center'}}>Phone Numbers</Card.Header>
                    <Card.Body>
                        <p>Main Office: <span style={{ float: 'right' }}>123-007-1337</span></p>
                        <p>Service: <span style={{ float: 'right' }}>456-007-1337</span></p>
                        <p>Sales: <span style={{ float: 'right' }}>789-007-1337</span></p>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Header as="h5" style={{ textAlign: 'center'}}>Find Us</Card.Header>
                    <Card.Body style={{ textAlign: 'center'}}>
                        Address: 808 W Dealership Dr, Smallville, KS, 67524
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
        );
    }
}

export default Contact;