import { VerticalSpacer } from '../../components/Helpers/VerticalSpacer';
import { HorizontalSlidingTile, Card } from '../../components/common/HorizontalSlidingTile';
import { SlideShow } from '../../components/common/SlideShow';
import '../../sass/pages/home.scss';

export default function Home(): JSX.Element {
    const cardDetails: Array<Card> = [
        { title: 'Call of Duty', img: `${process.env.PUBLIC_URL}/assets/test_images/background.jpg`, players: 500, rating: 5, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit optio vel debitis mollitia commodi doloribus architecto dolore culpa consectetur vero corrupti sint, iste corporis sed distinctio modi minima recusandae.' },
        { title: 'War fare', img: `${process.env.PUBLIC_URL}/assets/test_images/background2.jpg`, players: 450, rating: 4.8, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit optio vel debitis mollitia commodi doloribus architecto dolore culpa consectetur vero corrupti sint, iste corporis sed distinctio modi minima recusandae.' },
        { title: 'Cyberpunk', img: `${process.env.PUBLIC_URL}/assets/test_images/background3.jpg`, players: 120, rating: 1, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit optio vel debitis mollitia commodi doloribus architecto dolore culpa consectetur vero corrupti sint, iste corporis sed distinctio modi minima recusandae.' },
        { title: 'GTA V', img: `${process.env.PUBLIC_URL}/assets/test_images/background4.jpg`, players: 5000, rating: 2.3, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit optio vel debitis mollitia commodi doloribus architecto dolore culpa consectetur vero corrupti sint, iste corporis sed distinctio modi minima recusandae.' },
        { title: 'No mans sky', img: `${process.env.PUBLIC_URL}/assets/test_images/background5.jpg`, players: 300, rating: 3, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit optio vel debitis mollitia commodi doloribus architecto dolore culpa consectetur vero corrupti sint, iste corporis sed distinctio modi minima recusandae.' },
        { title: 'NFS', img: `${process.env.PUBLIC_URL}/assets/test_images/background6.jpg`, players: 250, rating: 4.5, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit optio vel debitis mollitia commodi doloribus architecto dolore culpa consectetur vero corrupti sint, iste corporis sed distinctio modi minima recusandae.' },
    ];

    return (
        <section className='home-page'>
            <VerticalSpacer rem={5} />
            <SlideShow />
            <VerticalSpacer rem={5} />
            <HorizontalSlidingTile title='Most Popular' cardDetails={cardDetails} link='/' />
            <VerticalSpacer rem={4} />
            <HorizontalSlidingTile title='Top Rated' cardDetails={cardDetails} link='/' />
            <VerticalSpacer rem={4} />
            <HorizontalSlidingTile title='Latest News' cardDetails={cardDetails} link='/' />
            <VerticalSpacer rem={2} />
        </section>
    );
}