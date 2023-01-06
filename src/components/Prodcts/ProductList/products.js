import React from "react"
const products = (props) => {
    return (
    <div className={"container mm-4 mt-5"}>
        <div className={"row"}>
            <div className={"table-responsive"}>
                <table className={"table table-striped"}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Price</th>
                        <th scope={"col"}>Quantity</th>
                        <th scope={"col"}>Category</th>
                        <th scope={"col"}>Manufacturer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.products.map((term) => {
                        return (
                            <tr>
                                <td>{term.name}</td>
                                <td>{term.address}</td>
                                <td>{term.address}</td>
                                <td>{term.address}</td>
                                <td>{term.address}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

//za da ja koristime komponentata nadvor
export default products;