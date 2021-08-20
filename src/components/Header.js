import { FaPenAlt } from "react-icons/fa";
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick= (e) => {
        console.log('object')
    }
    return (
        <header className = 'header'>
            <FaPenAlt/>
            <h1 style= {headingStyle}> {title} </h1>
            <Button color='blue' text='Post' onClick= {onClick}/>
        </header>
    )
}

Header.defaultProps={
    title : "Post Handler"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle ={
    
}

export default Header
