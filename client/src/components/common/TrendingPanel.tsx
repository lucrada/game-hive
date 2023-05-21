import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import '../../sass/components/trending_panel.scss';
import { VerticalSpacer } from '../Helpers/VerticalSpacer';

function TrendingItem(props: { title: String, content: String }): JSX.Element {
    return (
        <div className="trending-panel-item">
            <TrendingUpIcon className='trending-panel-item--icon' />
            <div className='trending-panel-item--content' >
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export function TrendingPanel(): JSX.Element {
    return (
        <div className='trending-panel'>
            <h2>Trending</h2>
            <VerticalSpacer rem={1.5} />
            <TrendingItem title='This is the title' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natus quia in excepturi ipsum doloremque. Repellendus, explicabo alias aperiam vitae' />
            <TrendingItem title='This is the title' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natus quia in excepturi ipsum doloremque. Repellendus, explicabo alias aperiam vitae' />
            <TrendingItem title='This is the title' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natus quia in excepturi ipsum doloremque. Repellendus, explicabo alias aperiam vitae' />
            <TrendingItem title='This is the title' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natus quia in excepturi ipsum doloremque. Repellendus, explicabo alias aperiam vitae' />
            <TrendingItem title='This is the title' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natus quia in excepturi ipsum doloremque. Repellendus, explicabo alias aperiam vitae' />
        </div>
    );
}