import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({dish, onClick}) {
    return(
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle><strong>{dish.name}</strong></CardTitle>
                </CardImgOverlay>        
            </Link>
        </Card>
    
            
    );
}
   
const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>  
                </div>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                </div>
                <Button outline color="secondary">
                    <span className="fa fa-pencil fa-lg"></span> Upload Document
                </Button>
                <Button outline color="secondary">
                    <span className="fa fa-pencil fa-lg"></span> Delete Document
                </Button>
            </div>



        );
    }
}

export default Menu;