import React from "react";
import table from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
    return (
        <div className={table["transaction-page"]}>
            <table className="table table-striped">
                <thead className="table-dark text-center">
                <tr>
                    <th className={table["transaction-border"]}>Type</th>
                    <th className={table["transaction-border"]}>Amount</th>
                    <th className={table["transaction-border"]}>Currency</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td className={table["transaction-border"]}>{item.type}</td>
                                <td className={table["transaction-border"]}>{item.amount}</td>
                                <td className={table["transaction-border"]}>{item.currency}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionHistory;
