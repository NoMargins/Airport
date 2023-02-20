import React from 'react';
import MenuItem from './MenuItem';
import DropdownMenu from './dropdown-menu/DropdownMenu';
import { mainItemsSelector, chosenFrameSelector } from './header.selectors';
import * as menuActions from './header.actions';
import { connect } from 'react-redux';
import logo from './dropdown-menu/imgs/logo.png';

import './header.scss';

class Header extends React.Component {
	state = {
		showContent: false,
	};

	render() {
		const { menuItems, chosenItem, setFrame } = this.props;
		return (
			<header className='header'>
				<div
					className='header_logo-holder'
					onClick={() =>
						this.setState({
							showContent: false,
							elemId: null,
						})
					}
				>
					<img className='header_logo-holder__logo' src={logo} alt='logo' />
				</div>

				<ul className='header_content-list'>
					{menuItems.map((el, index) => {
						return (
							<MenuItem
								key={index}
								id={el.id}
								chosenId={this.state.elemId}
								isActive={this.state.showContent}
								title={el.title}
								onClick={() => {
									if (
										this.state.showContent === false &&
										this.state.elemId === !el.id
									) {
										this.setState({
											showContent: true,
											elemId: el.id,
										});
										setFrame(el.droppingMenu);
									}
									if (
										this.state.elemId === el.id &&
										this.state.showContent === true
									) {
										this.setState({
											showContent: false,
										});
										setFrame(null);
									} else {
										this.setState({
											showContent: true,
											elemId: el.id,
										});
										setFrame(el.droppingMenu);
									}
								}}
							/>
						);
					})}
					<li className='header_content-list__menu-item'>
						<button className='language-btn'>EN</button>
					</li>
				</ul>
				{chosenItem != null && (
					<DropdownMenu key={chosenItem.id} list={chosenItem} />
				)}
			</header>
		);
	}
}

const mapState = (state) => {
	return {
		menuItems: mainItemsSelector(state),
		chosenItem: chosenFrameSelector(state),
	};
};

const mapDispatch = {
	getMenu: menuActions.menuReceived,
	setFrame: menuActions.setContent,
};

export default connect(mapState, mapDispatch)(Header);
