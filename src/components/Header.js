import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='steelblue' text='Add' onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
export default Header
