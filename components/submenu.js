import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Actions
import { getMenuItems } from "../actions/menus"

class SubMenu extends React.Component {
    componentDidMount() {
        this.props.getMenuItems().then(data => {
            console.log(data)
        })
    }

    render() {
        const { menuItems, fetching, error } = this.props
        return (
            <Row className="right-dir">
                <ul className="sub-menu">
                    <li className="first expanded">
                        <a title="submenu1"> زیرمنوی اول</a>
                        <ul className="main-menu--sub-list">
                            <li className="first leaf">
                                <a title="submenu1"> اول </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> دوم </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> سوم </a>
                            </li>
                            <li className="last leaf">
                                <a title="submenu1"> چهارم </a>
                            </li>
                        </ul>
                    </li>
                    <li className="first expanded">
                        <a title="submenu1"> زیرمنوی اول</a>
                        <ul className="main-menu--sub-list">
                            <li className="first leaf">
                                <a title="submenu1"> اول </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> دوم </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> سوم </a>
                            </li>
                            <li className="last leaf">
                                <a title="submenu1"> چهارم </a>
                            </li>
                        </ul>
                    </li>
                    <li className="first expanded">
                        <a title="submenu1"> زیرمنوی اول</a>
                        <ul className="main-menu--sub-list">
                            <li className="first leaf">
                                <a title="submenu1"> اول </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> دوم </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> سوم </a>
                            </li>
                            <li className="last leaf">
                                <a title="submenu1"> چهارم </a>
                            </li>
                        </ul>
                    </li>
                    <li className="first expanded">
                        <a title="submenu1"> زیرمنوی اول</a>
                        <ul className="main-menu--sub-list">
                            <li className="first leaf">
                                <a title="submenu1"> اول </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> دوم </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> سوم </a>
                            </li>
                            <li className="last leaf">
                                <a title="submenu1"> چهارم </a>
                            </li>
                        </ul>
                    </li>
                    <li className="first expanded">
                        <a title="submenu1"> زیرمنوی اول</a>
                        <ul className="main-menu--sub-list">
                            <li className="first leaf">
                                <a title="submenu1"> اول </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> دوم </a>
                            </li>
                            <li className="leaf">
                                <a title="submenu1"> سوم </a>
                            </li>
                            <li className="last leaf">
                                <a title="submenu1"> چهارم </a>
                            </li>
                        </ul>
                    </li>
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
        error: state.menus.error
    }
}

export default connect(
    mapStateToProps,
    { getMenuItems }
)(SubMenu)
