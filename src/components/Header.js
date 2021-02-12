import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'grey' :'green'}
            text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'SimpleTask',
}
export default Header
