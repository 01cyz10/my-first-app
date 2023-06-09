import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetup/NewMeetupForm';

function NewMeetups() {
  let navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-http-test-df523-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetups;
