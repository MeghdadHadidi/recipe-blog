import React from "react"
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap"
import SubMenu from "./submenu"

export default class Header extends React.Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false
		}
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	render() {
		return (
			<>
				<Navbar light expand="md" className="navbar-wrapper">
					<NavbarToggler onClick={this.toggle} />
					<NavbarBrand href="/" className="ml-auto m-r-0">
						<img src="../static/image/logo.png" alt="my image" />
					</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="d-none d-sm-block social-nav" navbar>
							<NavItem>
								<NavLink
									href="/components/"
									className="instagram"
								/>
							</NavItem>
							<NavItem>
								<NavLink
									href="/components/"
									className="aparat"
								/>
							</NavItem>
						</Nav>
						<Nav className="header-nav" navbar>
							<NavItem>
								<NavLink href="/components/">
									عنوان منوی اول
								</NavLink>
								<SubMenu menuItemId={1} />
							</NavItem>
							<NavItem>
								<NavLink href="/components/">
									عنوان منوی دوم
								</NavLink>
								<SubMenu menuItemId={2} />
							</NavItem>
							<NavItem>
								<NavLink href="/components/">
									عنوان منوی سوم
								</NavLink>
								<SubMenu menuItemId={3} />
							</NavItem>
							<NavItem>
								<NavLink href="/components/">
									عنوان منوی چهارم
								</NavLink>
								<SubMenu menuItemId={4} />
							</NavItem>
							<NavItem>
								<NavLink href="/components/">
									عنوان منوی پنجم
								</NavLink>
								<SubMenu menuItemId={5} />
							</NavItem>
							<NavItem>
								<NavLink href="/components/">
									عنوان منوی ششم
								</NavLink>
								<SubMenu menuItemId={6} />
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</>
		)
	}
}
