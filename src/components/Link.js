const Link = ({ text, onClick }) => {
    return (
        <a className='App-link' onClick={onClick}>
            {text}
        </a>
    );
};

export default Link;