import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import coffee from '../images/coffee.jpeg';
import time from '../images/time.jpeg';
import weather from '../images/weather.jpeg';
import work from '../images/work.jpeg';

function Portfolio() {
  return (
    <Row xs={1} md={2} className="g-4 mt-5">
        <Col>    
          <Card>
            <Card.Img variant="top" src={coffee} />
            <Card.Body>
              <Card.Title>Caffiends</Card.Title>
              <Card.Text>
              Welcome to Caffiends! At Caffiends, coffee isn't just a drink - it's a lifestyle! Step into our wonderful world of hot and cold beverages and some delicious food. And the best part? Register now to start ranking in the rewards of our amazing loyalty points program. Don't wait a second longer - sign up now! We encourage you to have a seat, take a sip, and leave a tip
              </Card.Text>
              <a href="https://caffiends.herokuapp.com">
              <Button variant="dark">View Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>    
          <Card>
            <Card.Img variant="top" src={time} />
            <Card.Body>
              <Card.Title>Javascript Timed Quiz</Card.Title>
              <Card.Text>
              A Javascript quiz with a time limit that decreases by ten when answered incorrectly. The user will be able to see all of their high scores and clear list.
              </Card.Text>
              <a href="https://teresarod11.github.io/JS-Timed-Quiz/">
              <Button variant="dark">View Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>    
          <Card>
            <Card.Img variant="top" src={weather} />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
              A simple weather dashboard that will allow you to look up any cities weather for the day and as well as a five day forecast.
              </Card.Text>
              <a href="https://teresarod11.github.io/weather-dashboard/">
              <Button variant="dark">View Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>    
          <Card>
            <Card.Img variant="top" src={work} />
            <Card.Body>
              <Card.Title>Work Day Scheduler</Card.Title>
              <Card.Text>
              A simple calender app for scheduling you work day using dayjs and jquery. The time and day is display at the top of the page for the user. The calender consists of time block from 9am-5pm that are color-coded depending on the time of day. These colors represent the past(grey), present(red) and future(green). The user is able to save their input by clicking the save button on the right of the time block. Perfect for scheduling your day to day chores/work.
              </Card.Text>
              <a href='https://teresarod11.github.io/work-day-scheduler/'>
              <Button variant="dark">View Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    
  );
}

export default Portfolio;