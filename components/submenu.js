import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import classNames from "classnames"
import { connect } from "react-redux"

// Actions
import { getMenuItems } from "../actions/menus"

class SubMenu extends React.Component {
    componentDidMount() {
        this.props.getMenuItems(this.props.menuItemId)
    }

    getItemsByParentId = parentId =>
        this.props.menuItems.filter(item => item.parentId === parentId)

    render() {
        const { menuItems, fetching, error } = this.props
        return (
            <Row className="right-dir">
                <ul className="sub-menu">
                    {menuItems.length > 0 &&
                        this.getItemsByParentId(0).map((item, index) => (
                            <li
                                key={item.id}
                                className={classNames({
                                    first: index === 0,
                                    expanded: true
                                })}
                            >
                                {this.getItemsByParentId(item.id).length >
                                    0 && <a title="submenu1">{item.title}</a>}
                                <ul className="main-menu--sub-list">
                                    {this.getItemsByParentId(item.id).map(
                                        (item, index) => (
                                            <li
                                                key={item.id}
                                                className={classNames({
                                                    leaf: true,
                                                    first: index === 0
                                                })}
                                            >
                                                <a title={item.title}>
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </li>
                        ))}
                </ul>
            </Row>
        )
    }
}

SubMenu.propTypes = {
    getMenuItems: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        fetching: state.menus.fetching,
        fetched: state.menus.fetched,
        menuItems: state.menus.items,
        menuItemsCount: state.menus.items.length,
        error: state.menus.error
    }
}

export default connect(
    mapStateToProps,
    { getMenuItems }
)(SubMenu)
