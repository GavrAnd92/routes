import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Articles from './articles';






class List extends React.Component{


    

    render(){

        
        const articlesArr = [
            {id: 1, article: "Статя 1" },
            {id: 2, article: "Статя 2" },
            {id: 3, article: "Статя 3" },
            {id: 4, article: "Статя 4" },
        ];

        return (
            <BrowserRouter>
            <div className="container center">

                    <ul>
                        {
                            articlesArr.map((articles) =>
                                <li><Link to={`/article/${articles.id}`}> {articles.article} </Link></li>)
                        }
                    </ul>
                    <div>
                    <Switch>
                        <Route path="/article/:id?" component={Articles} />
                    </Switch>
                    </div>
            </div>            
                </BrowserRouter>
        );

    }
}

export default List;