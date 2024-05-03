import React, { useState } from "react";
function UseStateOne() {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const [submit, submitted] = useState(false);
    const printValues = (e) => {
        e.preventDefault();
        setForm({
            username: data.username,
            password: data.password,
        });
        submitted(true);
    };

    const updateField = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <h1>USE STATE</h1>
            <form onSubmit={printValues}>
                <label>
                    UserName:
                    <input
                        value={data.username}
                        name="username"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    password:
                    <input
                        value={data.password}
                        name="password"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
            <p>{submit ? form.username : null}</p>
            <p>{submit ? form.password : null}</p>
        </div>
    );
}
export default UseStateOne;
