import '../../sass/components/article_card.scss';

export interface Article {
    imageURL: string,
    author: string,
    date: string,
    title: string,
    body: string,
}

export function ArticleCard(props: { article: Article }): JSX.Element {
    return (
        <div className="article-card">
            {props.article.imageURL !== "" ? <img className='article-card__thumbnail' src={props.article.imageURL} alt="thumbnail" /> : null}
            <div className="article-card__content">
                <div className="article-card__content--info">
                    <span className='article-card__content--info__left'>
                        By {props.article.author}
                    </span>
                    <span className='article-card__content--info__right'>
                        {props.article.date}
                    </span>
                </div>
                <h2 className="article-card__content--title">{props.article.title}</h2>
                <p>{props.article.body}</p>
            </div>
        </div>
    );
}