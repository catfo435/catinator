import React, { Component } from 'react';

export default class CatPic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: 'https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif',
      breedName: 'Image is loading'
    }

    this.getData();

  }

  getData() {
    const apiURL = 'https://api.thecatapi.com/v1/images/search?has_breeds=1'
    const apiKEY = '63b9a514-aad1-40fd-bb8c-d50b5ed28db3'

    fetch(apiURL, {
      headers: {
        'x-api-key': apiKEY
      }
    })
      .then((response) => { return response.json() })
      .then((data) => {
        if (data[0]['height'] !== data[0]['width']) {
          this.getData()
          return
        }
        this.setState({
          imageUrl: data[0]['url'],
          breedName: data[0]['breeds'][0]['name'],
        }
        )
      })
      .catch(console.error) //implement error later
  }

  render() {
    return (
      <>
        <img src={this.state.imageUrl} alt={`A ${this.state.breedName}`} className="cat"
        />
        <h2 className='breedName'>{this.state.breedName}</h2>
      </>
    )
  }
}
