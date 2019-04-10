import React, { Component } from 'react';
import './profile.css';
import { getList, addToList, deleteItem, updateItem } from './listFunction'
import Nav from './nav'

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      id: "",
      term: "",
      items: []
    }
  }

  componentDidMount() {
    this.getAll();
  }

  onChange = event => {
    this.setState({ term: event.target.value })
  }

  getAll = () => {
    getList().then(data => {
      this.setState({
        term: "",
        items: data
      },
        () => {
          console.log(this.state.items);
        }
      )
    })
  }

  onSubmit = event => {
    const { term } = this.state;
    event.preventDefault();
    addToList(term).then(() => {
      this.getAll()
    })
  }

  onEdit = (item, event) => {
    event.preventDefault();
    this.setState({
      term: item
    })
  }

  onDelete = (id, event) => {
    event.preventDefault();
    deleteItem(id);
    this.getAll();
    var data = [...this.state.items];
    data.filter(function (item, index) {
        data.splice(index, 1)
    });
    this.setState({ items: [...data] })
  }

  onUpdate = event => {
    event.preventDefault();
    updateItem(this.state.term, this.state.id).then(() => {
      this.getAll();
    })
  }


  render() {

    return (
      <div className="container">
      <Nav />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">Todo List App</h1>
          </div>
        </div>
        <div className="col-md-12">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="taskName">Task Name</label>
              <div className="row">
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    value={this.state.term || ""}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.onUpdate}>
                    Update
                </button>
                </div>
              </div>
            </div>
            <button type="submit" onClick={this.onSubmit}
              className="btn btn-success btn-block"> Submit</button>
          </form>

          <table className="table">
            <tbody>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td className="text-left">{item.term}</td>
                  <td className="text-right">
                    <button
                      herf=""
                      className="btn btn-info mr-1"
                      onClick={this.onEdit.bind(this, item.term)}>Edit
              </button>
                    <button
                      herf=""
                      className="btn btn-danger"
                      onClick={this.onDelete.bind(this, item._id)}>Delete
              </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Profile