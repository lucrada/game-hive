import '../../sass/components/article_card.scss';

export function ArticleCard(): JSX.Element {
    return (
        <div className="article-card">
            <img className='article-card__thumbnail' src={`${process.env.PUBLIC_URL}/assets/test_images/background.jpg`} alt="thumbnail" />
            <div className="article-card__content">
                <div className="article-card__content--info">
                    <span className='article-card__content--info__left'>
                        By Seline Shenoy
                    </span>
                    <span className='article-card__content--info__right'>
                        20-07-2023
                    </span>
                </div>
                <h2 className="article-card__content--title">Is Social Media the bad guy? Redefining Beauty in a digital world</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aliquam laboriosam nostrum quae asperiores. Esse ea tenetur possimus ad, sapiente.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, repellendus commodi. Qui impedit optio ipsa aliquam culpa accusantium, quod repellendus earum laboriosam autem tempora nemo repellat neque rerum reiciendis soluta.
                </p>
            </div>
        </div>
    );
}