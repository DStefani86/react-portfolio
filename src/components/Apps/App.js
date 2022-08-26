import './App.css';
import apps from './applications.json';

const Apps = () => 

<div className='apps'>
    {apps.map(app => 
        <div key={app.key} className='app'>
            <img src={app.image} alt='app1' />
            <div>
                <h2>{app.name}</h2>
                <h4>Description: { app.description } </h4>
            </div>
        </div>
    )}
</div>

export default Apps;