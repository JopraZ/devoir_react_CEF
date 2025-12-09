import ProgressBar from 'react-bootstrap/ProgressBar';

 export default function Progress() {
  return (
    <div>
        <p>HTML5 90%</p>
      <ProgressBar animated variant="success" now={90} />
      <p>CSS3 80%</p>
      <ProgressBar animated variant="info" now={80} />
      <p>JAVASCRIPT 70%</p>
      <ProgressBar animated variant="warning" now={70} />
      <p>PHP 60%</p>
      <ProgressBar animated variant="danger" now={60} />
      <p>REACT 50%</p>
      <ProgressBar animated variant="primary" now={50} />
    </div>
  );
}
