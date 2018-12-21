import dva from 'dva';
import './index.css';

const app = dva();

app.use({});

app.model(require('./models/products').default);

app.router(require('./router').default);

app.start('#root');
