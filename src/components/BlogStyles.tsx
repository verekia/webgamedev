const BlogStyles = () => (
  <style>{`
article main img {
  margin: auto;
  border-radius: 6px;
}

.blog-author {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  justify-content: center;
}

@media (max-width: 768px) {
  .blog-author {
    flex-direction: column;
  }
}

.blog-author img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin: 0;
}

.blog-author .author-socials {
  display: inline-flex;
  flexDirection: row;
  gap: 8px;
}

@media (max-width: 500px) {
  .blog-author .author-socials {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }
}
`}</style>
)

export default BlogStyles
