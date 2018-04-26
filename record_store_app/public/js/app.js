// Rendered by Records Component when addRecordIsVisible
class RecordForm extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            artist: '',
            album_title: '',
            image: '',
            release_date: '',
            description: '',
            price: 0,
            qty: 0
        }
    }
    componentDidMount(){
        if(this.props.record){
            this.setState({
                artist: this.props.record.artist,
                album_title: this.props.record.album_title,
                image: this.props.record.image,
                release_date: this.props.record.release_date,
                description: this.props.record.description,
                price: this.props.record.price,
                qty: this.props.record.qty,
                id: this.props.record.id
            })
        }
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.state)
    }
    render(){
        return  <div className='field'>

                    <form onSubmit={this.handleSubmit}>

                        <label
                            className='label'
                            for='artist'>Artist name
                        </label>
                        <div className='control'>
                            <input
                            className='input'
                            type='text'
                            id='artist'
                            onChange={this.handleChange}
                            value={this.state.artist}
                            />
                        </div>

                        <label
                            className='label'
                            for='album_title'>Album title
                        </label>
                        <div className='control'>
                            <input
                            className='input'
                            type='text'
                            id='album_title'
                            onChange={this.handleChange}
                            value={this.state.album_title}
                            />
                        </div>

                        <label
                            className='label'
                            for='image'>Image
                        </label>
                        <div className='control'>
                            <input
                            className='input'
                            type='text'
                            id='image'
                            onChange={this.handleChange}
                            value={this.state.image}
                            />
                        </div>

                        <label
                            className='label'
                            for='release_date'>Release date
                        </label>
                        <div className='control'>
                            <input
                            className='input'
                            type='text'
                            id='release_date'
                            onChange={this.handleChange}
                            value={this.state.release_date}
                            />
                        </div>

                        <label
                            className='label'
                            for='description'>Description
                        </label>
                        <div className='control'>
                            <input
                            className='input'
                            type='text'
                            id='description'
                            onChange={this.handleChange}
                            value={this.state.description}
                            />
                        </div>

                        <label
                            className='label'
                            for='price'>Price
                        </label>
                        <div className='control'>
                            <input
                            className='input'
                            type='text'
                            id='price'
                            onChange={this.handleChange}
                            value={this.state.price}
                            />
                        </div>

                        <label
                            className='label'
                            for='qty'>Quantity in Stock
                        </label>
                        <div className='control'>
                            <input
                            className='input'
                            type='text'
                            id='qty'
                            onChange={this.handleChange}
                            value={this.state.qty}
                            />
                        </div>

                        <div className='control'>
                            <input className='button is-primary' type='submit' />
                        </div>

                    </form>

                        <button
                            className='button is-link'
                            onClick={()=>this.props.toggleState('addRecordIsVisible', 'recordsListIsVisible')}>Cancel
                        </button>


                </div>
    }
}

// Rendered by Records Component when recordIsVisible
class Record extends React.Component{
    render(){
        return  <div>

                    <div className='tile is-ancestor'>

                        <div className='tile is-2'>
                        </div>

                        <div className='tile is-2'>
                        </div>

                        <div className='tile'>

                            <div>

                                <h3 className='tile is-child box'>
                                    <span>Artist Name:</span>
                                        {this.props.record.artist}
                                </h3>

                                <p className='tile is-child box'>
                                    <span>Album Title:</span>
                                    {this.props.record.album_title}
                                </p>

                                <p className='tile is-child box'>
                                    <span>Image:</span>
                                    {this.props.record.image}
                                </p>

                                <p className='tile is-child box'>
                                    <span>Release Date:</span>
                                    {this.props.record.release_date}
                                </p>

                                <p className='tile is-child box'>
                                    <span>Description:</span>
                                    {this.props.record.description}
                                </p>

                                <p className='tile is-child box'>
                                    <span>Price:</span>
                                    {this.props.record.price}
                                </p>

                                <p className='tile is-child box'>
                                    <span>Quantity:</span>
                                    {this.props.record.qty}
                                </p>

                            </div>

                            <div className='tile'>
                            </div>

                            <div className='tile'>

                                <button
                                    className='button is-warning' onClick={()=>this.props.toggleState('addRecordIsVisible', 'recordsListIsVisible')}>See Full List
                                </button>
                            </div>

                        </div>

                    </div>

                    <RecordForm
                        toggleState={this.props.toggleState}
                        record={this.props.record}
                        handleSubmit={this.props.handleSubmit}
                    />

                </div>
    }
}

// Rendered by Records Component when recordsListIsVisible
class RecordsList extends React.Component{
    render(){
        return  <table>
                    <tbody>

                        {this.props.records.map((record, index) => {
                            return  <tr>

                                        <td
                                            className='record'
                                            onClick={()=>
                                                { this.props.getRecord(record); this.props.toggleState('recordsListIsVisible', 'recordyIsVisible')}}>

                                                <h3> {record.artist} </h3>
                                        </td>

                                        <td>
                                            <button
                                                className='button is-warning is-small'
                                                onClick={()=> this.props.handleUpdateSubmit(record, index)}
                                            >Edit</button>
                                        </td>

                                        <td>
                                            <button
                                                className='button is-danger is-small'
                                                onClick={() => this.props.deleteRecord(record, index)}
                                            >Delete</button>
                                        </td>

                                    </tr>
                        })}


                    </tbody>
                </table>
    }
}

// Rendered by App Component
class Records extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recordsListIsVisible: true,
            addRecordIsVisible: false,
            recordIsVisible: false,
            editRecordIsVisible: false,
            records: [],
            record: {}
        }
        this.deleteRecord = this.deleteRecord.bind(this)
        this.getRecord = this.getRecord.bind(this)
        this.toggleState = this.toggleState.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    }
    componentDidMount(){
        this.getRecords();
    }
    deleteRecord(record, index){
        fetch('records/' + record.id,
            {
                method: 'DELETE'
            })
            .then(data => {
                this.setState({
                    records: [
                        ...this.state.records.slice(0, index),
                        ...this.state.records.slice(index + 1)
                    ]
                })
            })
    }
    getRecord(record){
        this.setState({record: record})
    }
    getRecords(){
        fetch('/records')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    records: data
                })
            }).catch(error => console.log(error))
    }
    toggleState(st1, st2){
        this.setState({
            [st1]: !this.state[st1],
            [st2]: !this.state[st2]
        })
    }
    handleCreate(record){
        const updatedRecords = this.state.records
        updatedRecords.unshift(record)
        this.setState({records: updatedRecords})
    }
    handleCreateSubmit(record){
        fetch('/records', {
            method: 'POST',
            body: JSON.stringify(record),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(jsonedRecord => {
            this.handleCreate(jsonedRecord)
            this.toggleState('addRecordIsVisible', 'recordsListIsVisible')
        })
    }
    handleUpdateSubmit(record){
        fetch('/records/' + record.id, {
            body: JSON.stringify(record),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(updatedRecord => {
            return updatedRecord.json()
        })
        .then(jsonedRecord => {
            this.getRecords()
            this.toggleState('recordsListIsVisible', 'recordIsVisible')
        })
        .catch(error => console.log(error))
    }
    render(){
        return  <div>
                    <h2>Records</h2>

                    {this.state.recordsListIsVisible ?
                        <button
                            className='button is-success'
                            onClick={()=>this.toggleState('addRecordIsVisible', 'recordsListIsVisible')}>
                            Add a Record
                        </button> : ''
                    }

                    {this.state.recordsListIsVisible ?
                        <RecordsList
                            toggleState={this.toggleState}
                            records={this.state.records}
                            getRecord={this.getRecord}
                            deleteRecord={this.deleteRecord}
                            handleUpdateSubmit={this.handleUpdateSubmit}
                        /> : ''
                    }

                    {this.state.addRecordIsVisible ?
                        <RecordForm
                            toggleState={this.toggleState}
                            handleCreate={this.handleCreate}
                            handleSubmit={this.handleCreateSubmit}
                        /> : ''
                    }

                    {this.state.recordIsVisible ?
                        <Record
                            toggleState={this.toggleState}
                            record={this.state.record}
                            handleSubmit={this.handleUpdateSubmit}
                        /> : ''
                    }
                </div>
    }
}




// Rendered by ReactDOM, renders Title and Records Component
class App extends React.Component{
    render(){
        return  <div className='section'>
                    <h1 className='title'>React Records!</h1>
                    <Records />
                </div>
    }
}




// Lowest level render
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
