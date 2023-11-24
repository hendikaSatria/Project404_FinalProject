const express = require('express');
const router = require('./routes/index');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');
const userAuthRoutes = require('./routes/userAuthenticationRoutes'); 
const orderRoutes = require('./routes/orderRoutes');
const proofOfPaymentRoutes = require('./routes/proofOfPaymentRoutes');
const app = express();

app.use(express.json());

app.use(router);
app.use('/shoppingCart', shoppingCartRoutes);
app.use('/userauth', userAuthRoutes);  
app.use('/user/orders', orderRoutes);
app.use('/user', proofOfPaymentRoutes);

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
