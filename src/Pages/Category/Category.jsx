import React from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSelectedOption } from './../../Redux/Actions/Actions'

const Category = (props) => {

    const history = useHistory();

    const categoryOption = useSelector(state => state.categoryOption)

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/products`);
    }

    return (
        <>
            <div className="container">
                <div className="row category d-flex justify-content-center align-items-center">

                    <div className="col-md-6 box">

                        <form onSubmit={handleSubmit}>

                            <label htmlFor="options"> Selected Option :<b> {categoryOption}</b></label>

                            <select required value={categoryOption} onChange={(e) => props.setSelectedOption(e.target.value)} className="form-control form-control-lg my-5" >
                                <option value="" disabled defaultValue>Choose Product... </option>
                                <option value="Mens">Mens</option>
                                <option value="Women">Women</option>
                                <option value="Boys">Boys</option>
                            </select>

                            <button type="submit" className="btn btnBgColor">Submit</button>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

export default connect(null, { setSelectedOption })(Category);