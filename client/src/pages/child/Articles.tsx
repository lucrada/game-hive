import { ArticleCard } from '../../components/common/ArticleCard';
import '../../sass/pages/articles.scss';

export default function Articles() {
    return (
        <section className='article-page'>
            <div className="article-page__header">
                <h1>Articles</h1>
            </div>
            <div className="article-page__body">
                <div className="article-page__body--cards">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
        </section>
    );
}