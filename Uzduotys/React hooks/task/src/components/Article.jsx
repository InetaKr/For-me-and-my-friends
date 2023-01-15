
const Article = ({ article, handleMark }) => (
    <div key={article.key} className={`article ${article.status}`}>
      <img src={article.photo} alt={article.title} />
      <div className="articleinfoWrapper">
      <h2>{article.title}</h2>
      {article.paragraphs.map(paragraph => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <label className="switch">
        <input type="checkbox" checked={article.status === 'marked'} onChange={() => handleMark(article.id)} />
        <span className="slider round"></span>
      </label>
      </div>
    </div>
  );
  
export default Article;

