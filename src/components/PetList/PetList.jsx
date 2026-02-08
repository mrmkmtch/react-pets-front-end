const PetList = (props) => {
    // lets ensure we have data to work with before adding function
    console.log(props)


    return (
        <div>
            <h1>Pet List</h1>
            <div>
                {
                !props.pets.length ? (
                    <h2>No Pets yet!</h2>
                ) : (
                <ul>
                    {
                        props.pets.map((pet) => {
                            return <li 
                            key={pet._id}
                            style={{cursor: "pointer", color: '#646CFF'}}
                            onClick={() => props.onSelectPet(pet)}
                            >
                                {pet.name}
                                </li>
                        })
                    }
                    </ul>
                )}
            </div>
        </div>
    );
}

export default PetList;