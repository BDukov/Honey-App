import { useState, useEffect } from "react";

import * as honeyTypeService from "../../services/honeyTypeService";
import HoneyTypeItem from "../HoneyTypes/HoneyTypeItem";

import "./HoneyTypes.css";

export default function HoneyTypes() {

    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        honeyTypeService.getAll().then((result) => setPosts(result));
     }, []);

    return (
        <>
            <div className="types-of-honey">
        <div className="container">
            <div className="section-title">
                <h2 className="fs-1 fw-bold">Types of Honey</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ipsum
                    dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className="row">
            {posts.slice(-4).map((post) => {
                let keys = Object.keys(post).join('');
                let data = Object.values(post);

                return <HoneyTypeItem key={keys} id={keys} {...data[0]} />           
            })}
            </div>
        </div>
    </div>
    </>
    )
}