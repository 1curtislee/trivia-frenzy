const axios = require('axios');

const API = {
    getDataFromDb: () => {
        console.log('connected to api.js file')
        
        fetch('http://localhost:3001/api/getData')
        .then((data) => data.json())
        .then((res) => this.setState({ data: res.data }) );
    },

    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB: (message) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            id: idToBeAdded,
            message: message,
        });
    },

    // our delete method that uses our backend api
    // to remove existing database information
    deleteFromDB: (idTodelete) => {
        parseInt(idTodelete);
        let objIdToDelete = null;
        this.state.data.forEach((dat) => {
            if (dat.id === idTodelete) {
            objIdToDelete = dat._id;
            }
        });

        axios.delete('http://localhost:3001/api/deleteData', {
            data: {
            id: objIdToDelete,
            },
        });
    },

    // our update method that uses our backend api
    // to overwrite existing data base information
    updateDB: (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        parseInt(idToUpdate);
        this.state.data.forEach((dat) => {
            if (dat.id === idToUpdate) {
            objIdToUpdate = dat._id;
            }
        });

        axios.post('http://localhost:3001/api/updateData', {
            id: objIdToUpdate,
            update: { message: updateToApply },
        });
    }
};

module.exports = API;
