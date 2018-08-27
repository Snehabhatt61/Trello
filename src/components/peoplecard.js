import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Peoplecard extends Component {
    constructor() {
        super(props);

       
    }
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="10%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle >{this.props.people.name}>Card title</CardTitle>
                        <CardSubtitle>{this.props.people.age}Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>

        );
    }
}
export default Peoplecard;
