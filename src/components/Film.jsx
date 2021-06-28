function Film(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className="card" key={id}>
      <div className="card-image">
        {poster === 'N/A' ? (
          <img src={`https://via.placeholder.com/300x400?text=${title}`} />
        ) : (
          <img src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </div>
  );
}

export { Film };
