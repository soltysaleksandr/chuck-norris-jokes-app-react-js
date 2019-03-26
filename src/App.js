import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryList from './CategoryList';
import Joke from './Joke';
import RandomJokeButton from './RandomJokeButton';
import request from './request';


class App extends React.Component {
    state = {
        joke: '',
        categories: [],
        currentCategory: 'explicit',
        isActive: 'active'
    };

    componentWillMount() {
        this.getCategories();

    }

    getCategories = () => {
        const page = '/categories';
        request(page, (json) => {
            this.setState({
                categories: json,
            });
        });

    };

    getJokeByCategory = (e) => {
        const category = e.target.textContent,
            page = '/random?category=' + category;
        console.dir(category);
        request(page, (json) => {
            this.setState({
                joke: json.value,
                currentCategory: category,
            });
        });
    };

    getJokeByState = () => {
        const category = this.state.currentCategory,
            page = '/random?category=' + category;
        request(page, (json) => {
            this.setState({
                joke: json.value,
            });
        });
    };

    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <CategoryList
                        handlerGetJokeByCategory={this.getJokeByCategory}
                        categories={this.state.categories}
                        currentCategory={this.state.currentCategory}
                        isActive={this.state.isActive}
                        cb={(index, array, Category) => {
                            if (index < array.length / 2) {
                                return Category;
                            }
                        }}
                    />

                    <Joke value={this.state.joke} />

                    <CategoryList
                        handlerGetJokeByCategory={this.getJokeByCategory}
                        categories={this.state.categories}
                        currentCategory={this.state.currentCategory}
                        isActive={this.state.isActive}
                        cb={(index, array, Category) => {
                            if (index >= array.length / 2) {
                                return Category;
                            }
                        }}
                    />
                </div>

                <div className='row d-flex justify-content-center'>
                    <RandomJokeButton
                        handlerGetJokeByState={this.getJokeByState}
                        value='random joke' />
                </div>
            </div>

        );
    }
}


export default App;