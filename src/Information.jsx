import PropTypes from 'prop-types';

function Information({name, age, phone, disabled, skills}){
    return (
        <div>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <h3>{phone}</h3>
            <button type='button' disabled={disabled}>Button</button>
            <ul>
                {skills.map((items, index) => (
                    <li key={index}>{items}</li>
                ))}
            </ul>
        </div>
    );
}

Information.propType = {
    name: PropTypes.string,
    age: PropTypes.number,
    phone: PropTypes.number,
    disabled: PropTypes.bool,
    skills: PropTypes.arrayOf(PropTypes.string || PropTypes.number),
}

Information.defaultProps = {
    age: 30,
    phone: 8373783833,
    disabled: true,
}

export default Information;