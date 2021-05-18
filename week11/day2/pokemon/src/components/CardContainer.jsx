import React, { Component } from 'react';
import Card from "./Card"
import "./cardContainer.css"

class CardContainer extends Component {
    state = {
        searchCriteria: "",
        pokemonBerries: [],
        pokeName: "",
        pokeHP: "",
        frontURL: "",
        backURL: ""
    }

    async componentDidMount() {
      const berryUrl = "https://pokeapi.co/api/v2/berry/"
       const fetchData = await fetch(berryUrl,{ headers: {
      'Content-Type': 'application/json'
      
    },})
    const json = await fetchData.json()
    this.setState({
        pokemonBerries:json.results
    })
   }
   
   searchCriteria = (event) =>{
       const search = event.target.value.toLowerCase()
    
           this.setState({
               searchCriteria:search
           })

       
   }

   

    render() {
        
        const {pokemonData} = this.props
        
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :pokemonData[0].pokemon

        const getInfo = (event) => {
            console.log(event.target.value) 
          }

        
        

        

        
        return (
            <div className="main-card-container">
                <div>
                <input className="search-field" onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a pokemon"/>

                </div>
                
                <div>
                    <form type="submit">
                        <input onChange={getInfo} className="create-field" type="text" name="pokeName" placeholder="Enter a Name"/>
                        <input onChange={getInfo} className="create-field" type="text" name="pokeHP" placeholder="Enter a HP"/>
                        <input onChange={getInfo} className="create-field" type="text" name="frontURL" placeholder="Enter front URL"/>
                        <input onChange={getInfo} className="create-field" type="text" name="backURL" placeholder="Enter back URL"/>
                        <button className="create-button">Create</button>
                    </form>
                </div>
                <div className="card-container">

                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
                )}
                </div>
              
            </div>
        );
    }
}


export default CardContainer;