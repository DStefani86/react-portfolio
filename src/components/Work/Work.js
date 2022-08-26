import './Work.css';
import apps from './applications.json';

const Work = () => 

<div className='apps'>
    {apps.map(app => 
        <div key={app.key} className='work'>
            <img src={app.image} alt='app1' />
            <div>
                <h2>{app.name}</h2>
                <h4>Description: { app.description } </h4>
            </div>
        </div>
    )}
</div>

export default Work;