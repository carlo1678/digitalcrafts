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
        backURL: "",
        pokemonList: []
    }

    componentDidMount() {
      this.setState({
        pokemonList: this.props.pokemonData[0].pokemon
      })
      console.log(this.state.pokemonList)
   }
   
   searchCriteria = (event) =>{
       const search = event.target.value.toLowerCase()
    
           this.setState({
               searchCriteria:search
           })  
   }

   handlePokeData = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
       event.preventDefault();
      
       
   }

   handleSubmitData = async (e) => {
       const newPokemon = { 
           name: this.state.pokeName,
           hp: this.state.pokeHP,
           sprites: {
               front: this.state.frontURL,
               back: this.state.backURL
           }
        }

        this.setState({
            pokemonList: [newPokemon, ...this.state.pokemonList]
        })
       e.preventDefault();
       
   }

   

    render() {       
        const filteredData = this.state.pokemonList.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? this.state.pokemonList.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :this.state.pokemonList

        

        
        

        

        
        return (
            <div className="main-card-container">
                <div>
                <input className="search-field" onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a pokemon"/>

                </div>
                
                <div>
                    <form className="pokeForm" onSubmit={this.handleSubmitData}>
                        <input className="create-field" type="text" name="pokeName" placeholder="Enter a Name" value={this.state.pokeName} onChange={this.handlePokeData}/>
                        <input className="create-field" type="text" name="pokeHP" placeholder="Enter a HP" value={this.state.pokeHP} onChange={this.handlePokeData}/>
                        <input className="create-field" type="text" name="frontURL" placeholder="Enter front URL" value={this.state.frontURL} onChange={this.handlePokeData}/>
                        <input className="create-field" type="text" name="backURL" placeholder="Enter back URL" value={this.state.backURL} onChange={this.handlePokeData}/>
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