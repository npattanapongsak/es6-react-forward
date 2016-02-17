const React = require('react');

class Header extends React.Component {
	handleLayoutEvent(event){
		this.props.changeLayout(event.target.value);

	}
	render() {
		return (
		<header className="app-header">
			<div className="appheader__inner">
				<h1 className="app-header__title">Forwardflix</h1>
				<select 
					value={this.props.layout} 
					className="app-header__display-select"
					onChange={this.handleLayoutEvent.bind(this)}
				>
					<option value="tile">Tile</option>
					<option value="list">List</option>

				</select>
			</div>

		</header>
		);
	}
}

module.exports = Header;