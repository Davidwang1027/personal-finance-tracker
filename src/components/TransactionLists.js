import React from 'react'

export const TransactionLists = () => {
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                <li className="minus">
                    Cash <span>-$400</span><button class="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}
