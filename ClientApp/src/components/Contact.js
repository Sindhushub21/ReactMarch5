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
                        <p style={{fontWeight: '500'}}>Main Office: <span style={{ float: 'right', fontWeight: 'normal' }}>123-007-1337</span></p>
                        <p style={{fontWeight: '500'}}>Service: <span style={{ float: 'right', fontWeight: 'normal' }}>456-007-1337</span></p>
                        <p style={{fontWeight: '500'}}>Sales: <span style={{ float: 'right', fontWeight: 'normal' }}>789-007-1337</span></p>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Header as="h5" style={{ textAlign: 'center'}}>Email</Card.Header>
                    <Card.Body style={{ textAlign: 'center'}}>
                        John.Smith@CarDealer.com
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Header as="h5" style={{ textAlign: 'center'}}>Locations</Card.Header>
                    <Card.Body style={{ textAlign: 'center'}}>
                        <span style={{fontWeight: '500'}}>Main:</span> 808 W Dealership Dr, Smallville, KS, 67524
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
        );
    }
}

export default Contact;