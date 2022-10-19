import React, {useEffect, useState} from 'react';
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sort: 'rating'
    });
    const API_URL = 'https://634efe0fdf22c2af7b489f2c.mockapi.io'

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${API_URL}/items?${categoryId > 0 ? `category=${categoryId}` : ``}&sortBy=${sortType.sort}&order=${sortType.order}`)
            .then(res => {
                setItems(res.data)
                setIsLoading(false)
            })
        // window.scrollTo(0, 0)
    }, [categoryId, sortType]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType} onChangeSort={(id) => setSortType(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
                        : items.map((pizza) =>
                            <PizzaBlock
                                key={pizza.id}
                                {...pizza}
                            />
                        )
                }
            </div>
        </div>
    );
};

export default Home;
