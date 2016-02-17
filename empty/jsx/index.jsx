const React  =require('react');
const preload = require('./netflix');
const _ = require('lodash');
const MovieContainer = require('./MovieContainer');
const MovieTileLayout = require('./MovieTileLayout');

const MovieListLayout = require('./MovieListLayout');
const Header = require('./Header');

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			layout: 'tile',
			results: _.clone(preload.Search)
		};
	}

	changeLayout(layout){
		console.log('changeLayout '+layout)
		this.setState({layout:layout});
	}

	render() {
		let layout;
		if(this.state.layout ==='tile'){
			layout = MovieTileLayout;
		}else{
			layout = MovieListLayout;
		}
		return (
			<div className="app-container">
				<Header
					layout={this.state.layout}
					changeLayout ={this.changeLayout.bind(this)}
				/>
				<div className="movies-list">
					 {
						this.state.results.map((el)=>{
							return (
								<MovieContainer 
									id={el.imdbID}
									key={el.imdbID} 
									layout={layout}
								/>
							);
						})
					}
				</div>
			</div>
		);
	}
}

module.exports = App;