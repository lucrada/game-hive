import { ArticleCard } from '../../components/common/ArticleCard';
import '../../sass/pages/articles.scss';
import { Article } from '../../components/common/ArticleCard';

export default function Articles(): JSX.Element {

    const articles: Array<Article> = [
        {
            imageURL: `${process.env.PUBLIC_URL}/assets/test_images/background.jpg`,
            author: "Seline Shenoy",
            date: "20-07-2023",
            title: "Is Social Media the bad guy? Redefining Beauty in a digital world",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aliquam laboriosam nostrum quae asperiores. Esse ea tenetur possimus ad, sapiente.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, repellendus commodi. Qui impedit optio ipsa aliquam culpa accusantium, quod repellendus earum laboriosam autem tempora nemo repellat neque rerum reiciendis soluta.",
        }
    ];

    return (
        <section className='article-page'>
            <div className="article-page__header">
                <h1>Articles</h1>
            </div>
            <div className="article-page__body">
                <div className="article-page__body--cards">
                    <ArticleCard article={articles[0]} />
                    <ArticleCard article={articles[0]} />
                    <ArticleCard article={articles[0]} />
                    <ArticleCard article={articles[0]} />
                    <ArticleCard article={articles[0]} />
                    <ArticleCard article={articles[0]} />
                </div>
            </div>
        </section>
    );
}