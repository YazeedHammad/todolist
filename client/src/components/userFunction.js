import axios from 'axios';

export const login = async user => {
    try {
        const res = await axios
            .post('http://localhost:4000/api/register', {
                userName: user.userName,
                password: user.password
            });
        localStorage.setItem('usertoken', res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const register = async newUser => {
    const res = await axios
        .post('http://localhost:4000/api/register', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            userName: newUser.userName,
            password: newUser.password
        });
    console.log('Registered!');
}