const getServices= "SELECT * FROM service";
const addServices ="INSERT INTO service(name,description, cost, image) VALUES($1, $2, $3, $4)";
const checkServiceExist = "SELECT * FROM service WHERE name=$1";
const deleteService = "DELETE FROM service WHERE id=$1";

const addClient = "INSERT into users (name, surname, cell_no, password, role) values($1, $2, $3, $4, 'Client')";
const checkClientCelllExists = "SELECT * FROM users WHERE cell_no= $1";

const addAddress = "INSERT INTO venue(street_name, suburb, city, postal_code, request_id) VALUES($1, $2, $3, $4, $5)";
const getAddress = "SELECT * FROM venue";

module.exports ={
    getServices,
    addServices,
    checkServiceExist,
    deleteService,
    addClient,
    checkClientCelllExists,
    addAddress,
    getAddress

}