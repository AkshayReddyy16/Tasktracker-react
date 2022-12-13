import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) =>{
    const onClick=()=>{
        console.log('click')
    }
    return(
        <div>
        <header className='header'>
            <h1>
                {props.title}
            </h1>
            <Button color={props.showAdd ? 'red':'green'} text={props.showAdd ? 'Close':'Add'} onClick={props.onAdd}/>
        </header>

        </div>
    )
}
Header.defaultProps={
    title:"Task Tracker"
}
Header.prototype={title:PropTypes.string.isRequired}
//css in js
// const headingstyle={
//     color:'red',
//     backgroundColor:'black'

// }
export default Header