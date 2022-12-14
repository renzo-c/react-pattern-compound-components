import "./styles.css";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";

export default function App() {
  const cardBodyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const cardTitleText = "CARD TITLE";
  const cardFooter = "CARD FOOTER";

  return (
    <div className="App">
      <Card py={0.3} lockControl>
        <CardHeader>{cardTitleText}</CardHeader>
        <CardBody>{cardBodyText}</CardBody>
        <CardFooter>{cardFooter}</CardFooter>
      </Card>
    </div>
  );
}