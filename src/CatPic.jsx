import React, { Component } from 'react';


export default class CatPic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: 'https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif',
      breedName: 'Fetching a cat for you...',
      catExist: false
    }

    this.getCatData();

  }

  handleClick = () => {
    if (!this.state.catExist) {
      return
    }
    this.setState({
      imageUrl: 'https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif',
      breedName: 'Fetching another cat for you...',
      catExist: false
    }
    )
    this.getCatData()
  }

  getCatData() {
    const apiURL = 'https://api.thecatapi.com/v1/images/search?has_breeds=1'
    const apiKEY = process.env.REACT_APP_CAT
    console.log(apiKEY);

    fetch(apiURL, {
      headers: {
        'x-api-key': apiKEY
      }
    })
      .then((response) => { return response.json() })
      .then((data) => {

        this.setState({
          imageUrl: data[0]['url'],
          breedName: data[0]['breeds'][0]['name'],
          catExist: true
        }
        )
      })
      .catch((e) => {
        alert('Timeout, try again after a few seconds!')
        console.log(e);
        this.setState({
          imageUrl: "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/05/cat-yawning-other-cats.jpg",
          breedName: "Try after a few seconds",
          catExist: true
        })
      }) //implement error later
  }

  render() {
    return (
      <>
        <img src={this.state.imageUrl} alt={`A ${this.state.breedName}`} className="cat" />
        <button className='next-cat-button' onClick={this.handleClick}>Get a new cat uwu</button>
        <h2 className='breedName'>{this.state.breedName}</h2>
      </>
    )
  }
}
//have to implement gradient change when new cat appears
