import React,{Component} from 'react';
import { Navbar , Nav , Container } from 'react-bootstrap';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    

class DishDetail  extends Component {



    constructor(props) {
        super(props);

        
    }
    render(){

        const menu = this.props.dish.map((dish) => {
                 
                if (dish != null)
                    return(
                        <div>
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            
                            </CardBody>
                        </Card>
                        </div>
                    );
                else
                    return(
                        <div></div>
                    );
        
                
              });  

        return(
            <div>{menu}</div>
        );
           
            
      }
    

  

}

export default DishDetail;