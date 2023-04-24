import { VerticalSpacer } from '../../components/Helpers/VerticalSpacer';
import { HorizontalSlidingTile } from '../../components/common/HorizontalSlidingTile';
import '../../sass/pages/home.scss';

export default function Home() {
    const gameList = [
        { name: 'GTA', rating: 5 },
        { name: 'GTA', rating: 5 },
        { name: 'GTA', rating: 5 },
        { name: 'GTA', rating: 5 },
        { name: 'GTA', rating: 5 },
        { name: 'GTA', rating: 5 },
    ];

    return (
        <section className='home-page'>
            <VerticalSpacer rem={2} />
            <HorizontalSlidingTile title='Most Popular' gameList={gameList} link='/' />
            <VerticalSpacer rem={4} />
            <HorizontalSlidingTile title='Top Rated' gameList={gameList} link='/' />
            <VerticalSpacer rem={4} />
            <HorizontalSlidingTile title='Latest News' gameList={gameList} link='/' />
            <VerticalSpacer rem={2} />
        </section>
    );
}