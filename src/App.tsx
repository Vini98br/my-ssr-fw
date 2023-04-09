import Comments from "./components/Comments";

interface Props {
  description: string;
  comments: string[];
}
function App({ comments, description }: Props) {
  return (
    <div className="App">
      <header>{description}</header>

      <div>
        <Comments comments={comments} />
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
