import axios from 'axios';

export const getList = () => {
    return axios
    .get('http://localhost:4000/api/profile', {
      headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      return res.data;
    })
  }

  export const addToList = async term => {
    const res = await axios
      .post('http://localhost:4000/api/profile', { term:term }, {
        headers: { "Content-Type": "application/json" }
      }, 
);
    console.log(res);
  }

  export const deleteItem = id => {
    axios
    .delete(`http://localhost:4000/api/profile/${id}`, {
      headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error); 
    })
  }

  export const updateItem = async (term, id) => {
    const res = await axios
      .put(`http://localhost:4000/api/profile/${id}`, { term: term }, {
        headers: { "Content-Type": "application/json" }
      });
    console.log(res);
  }