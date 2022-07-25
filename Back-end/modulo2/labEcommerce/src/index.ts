import app from './app';
import getAllUser from "./endpoints/getUser"
import getAllProducts from "./endpoints/getProduct"
import getAllPurchases from "./endpoints/getPurchases"
import createProduct from "./endpoints/createProduct"
import createUser from "./endpoints/createUser"
import createPurchases from "./endpoints/createPurchases"


app.get('/users', getAllUser);
app.get('/products',getAllProducts);
app.get('/purchases',getAllPurchases);
app.post('/products',createProduct);
app.post('/users', createUser);
app.post('/purchases', createPurchases)


