import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as honeyTypesService from "../../services/honeyTypeService";
import HoneyTypeItem from "../../components/HoneyTypes/HoneyTypeItem";
import { useAuthContext } from "../../hooks/useAuthContext";

import "./HoneyTypes.css";

export default function HoneyTypes() {

    const [honeyTypes, setHoneyTypes] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        honeyTypesService.getAll().then(res => {
            setHoneyTypes(res);
        });
    }, []);

    return (
<>
        <div className="page-nav details">
        <div className="container">
          <div className="row">
            <h2 className="text-start">Honey Types</h2>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              {user && user.email ==="admin@abv.bg" &&
              <li>
                <Link to="/honey-types/add-honey">Add Honey Type</Link>
              </li>
              }
            </ul>
          </div>
        </div>
      </div>
        <div className="honey-type-page">
        <div className="container">
            <div className="row-honey-type">
            {honeyTypes.map((post) => {
                let keys = Object.keys(post).join('');
                let data = Object.values(post);
            
                return <HoneyTypeItem key={keys} id={keys} {...data[0]} />
            })}
            </div>
        </div>
    </div>
</>
     
    );
}