const ValidationList = ({ validationResults }) => {
    return (
        <ul>
            {validationResults.map((result, index) => (
                <li key={index}>{result}</li>
            ))}
        </ul>
    );
}

export default ValidationList; 