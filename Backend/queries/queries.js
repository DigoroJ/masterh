const getServices= "SELECT * FROM service";
const addServices ="INSERT INTO service(name,description, cost, image) VALUES($1, $2, $3, $4)";
const checkServiceExist = "SELECT * FROM service WHERE name=$1";
const deleteService = "DELETE FROM service WHERE id=$1";

const addClient = "INSERT into users (name, surname, cell_no, password, role) values($1, $2, $3, $4, 'Client')";
const checkClientCelllExists = "SELECT * FROM users WHERE cell_no= $1";

const addAddress = "INSERT INTO venue(street_name, suburb, city, postal_code, request_id) VALUES($1, $2, $3, $4, $5)";
const getAddress = "SELECT * FROM venue";

const addRequest = "INSERT INTO request(client_id, service_id, event_date) VALUES($1, $2, $3)";
const getRequests = "SELECT r.id, s.name AS Service, CONCAT(u.name,' ', u.surname) AS Client, cell_no, CONCAT(v.street_name,', ',suburb,', ',city,', ',postal_code) AS Venue, req_date, event_date, status FROM service s, users u, request r, venue v WHERE s.id = r.service_id AND u.id = r.client_id AND r.id = v.request_id"
const updateStatus = "UPDATE request SET status=$1 WHERE id=$2";
const addPic = "INSERT INTO gallery(name,description, image, category) VALUES($1, $2, $3, $4)";
const updatePic = "UPDATE gallery SET name=$1, description=$2, image=$3, category=$4 WHERE id=$5";
const deletePic = "DELETE FROM gallery WHERE id=$1";
const getPic = "SELECT * FROM gallery WHERE category=$1";
const getAllPics = "SELECT * FROM gallery ORDER BY category";
const getPicById = "SELECT * FROM gallery WHERE id =$1";


module.exports ={
    getServices,
    addServices,
    checkServiceExist,
    deleteService,
    addClient,
    checkClientCelllExists,
    addAddress,
    getAddress, 
    addRequest, 
    getRequests,
    updateStatus,
    addPic,
    updatePic,
    deletePic,
    getPic,
    getAllPics,
    getPicById
}