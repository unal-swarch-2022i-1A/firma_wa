import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderLeader(leader) {
    if (leader != null) {
        return(
            <Media tag="li">

                        <Media left>
                            <Media object src={baseUrl + leader.leader.image} alt={leader.leader.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{leader.leader.name}</Media>
                            <p>{leader.leader.designation}</p> 
                            <p>{leader.leader.description}</p>
                        </Media>

                </Media>
            
        );
    } else {
        return <div></div>
    }

}

function Account(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <RenderLeader key={leader.id} leader={leader} />
        );
    });

    if (props.leaders.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.leaders.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.leaders.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } else { 
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>My Account</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Info</h2>
                    </div>
                    <div className="col-12">
                    <Media list>
                        <Stagger in>                            
                            {props.leaders.leaders.slice(0, 1).map((leader) => {  
                                return (
                                    <Fade in>
                                    <div key={leader.id} className="col-12 m-1">                                        
                                        <RenderLeader leader={leader} />                                        
                                    </div>
                                    </Fade>
                                );
                            })}
                        </Stagger>
                    </Media>             
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;       