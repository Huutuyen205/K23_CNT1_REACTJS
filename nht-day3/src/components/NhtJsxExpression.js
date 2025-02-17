import React from 'react';

export default function NhtJsxExpression() {
    // biến
    const name = "Nguyễn Hữu Tuyên";

    // biến đối tượng
    const user = {
        firstName: "Tuyên",
        lastName: "Nguyễn Hữu"
    };

    // hàm
    const fullName = (user) => {
        return <h2>{user.firstName + ' ' + user.lastName}</h2>;
    };

    // element
    const element = (
        <div>
            <h2>{fullName(user)}</h2>
            <hr />
            <h3>Welcome to, {name}</h3>
        </div>
    );

    const saywelcome = (name) => {
        if (name) {
            return <h3>Welcome to = {name}</h3>;
        } else {
            return <h3>Welcome to Fit-Ntu-k23cnt1</h3>;
        }
    };

    return (
        <div>
            <h1>Nht-Jsx-Expression</h1>
            {element}
            <hr />
            {saywelcome()}
            {saywelcome("Nguyễn Hữu Tuyên")}
        </div>
    );
}
