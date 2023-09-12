const Styles = () => (
  <style>{`
.triple-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.triple-images img {
  margin: auto;
}

.double-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.double-images img {
  margin: auto;
}

@media (max-width: 500px) {
  .triple-images {
    grid-template-columns: repeat(1, 1fr);
  }

  .double-images {
    grid-template-columns: repeat(1, 1fr);
  }

`}</style>
)

export default Styles
