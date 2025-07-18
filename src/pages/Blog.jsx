import { Helmet } from "react-helmet";

export default function Blog() {
    return (
      <>
      <Helmet>
        <title>Blog | Boosting</title>
      </Helmet>
      
      <div className="container py-5">
        <h1 className="h3 mb-3">Blog</h1>
        <p>Aquí aparecerán los artículos e información relevante.</p>
      </div>
      </>
    );
  }
  