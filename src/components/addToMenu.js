import React from 'react';

export class addToMenu extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeFoodPicture = this.onChangeFoodPicture.bind(this);

        this.state = {
            FoodName: '',
            Price: '',
            FoodPicture: ''
        }
    }

    onChangeFoodName(c) {
        this.setState({
            FoodName: c.target.value
        });
    }

    onChangePrice(c) {
        this.setState({
            Price: c.target.value
        });
    }
    onChangeFoodPicture(c) {
        this.setState({
            FoodPicture: c.target.value
        })
    }

    onSubmit(c) {
        c.preventDefault();
        alert("Menu: " + this.state.FoodName + " "
            + this.state.Price + " " +
            this.state.FoodPicture);

            const newMenu ={
                FoodName:this.state.FoodName,
                Price:this.state.Price,
                FoodPicture:this.state.FoodPicture
            };

        axios.post('http://localhost:4000/api/menu', newMenu)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));    

    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Menu Food Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.FoodName}
                            onChange={this.onChangeFoodName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Menu Food Price: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Price}
                            onChange={this.onChangePrice}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Food Image: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.FoodPicture}
                            onChange={this.FoodPicture}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}