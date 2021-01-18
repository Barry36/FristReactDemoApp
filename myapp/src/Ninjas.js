function Ninjas(props) {

    console.log(props);
    return (
        <div className="ninja">
            <div>Name: { props.name }</div>
            <div>Age: 23</div>

        </div>
    );
}

export default Ninjas;